from django.shortcuts import render

# Create your views here.
import logging

from core.models import User
from .serializers import UserCreateSerializer, UserRetrieveSerializer
from django.db.models import F

from rest_framework import viewsets, status
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from drf_spectacular.utils import (
    extend_schema_view,
    extend_schema,
    OpenApiParameter,
    OpenApiTypes,
)

logger = logging.getLogger("ecs_logger")


@extend_schema_view(
    list=extend_schema(
        parameters=[
            OpenApiParameter(
                "emails",
                OpenApiTypes.STR,
                description="Comma separated list of emails to filter",
            ),
        ]
    )
)
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get_serializer_class(self):
        if self.action in ["create", "update", "partial_update"]:
            return UserCreateSerializer
        return UserRetrieveSerializer

    def _params_to_strs(self, query_params):
        return [str(val) for val in query_params.split(",")]

    def get_queryset(self):
        queryset = self.queryset
        
     
        emails = self.request.query_params.get("emails")
        if emails:
            emails = self._params_to_strs(emails)
            queryset = queryset.filter(email__in=emails)
        
        return queryset.order_by("-id")


    def perform_create(self, serializer):
        try:
            serializer.save(user=self.request.user)
        except Exception as e:
            logger.error(e)
            raise e

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        if response.status_code == status.HTTP_201_CREATED:
            user = User.objects.get(id=response.data["id"])
            response.data = {"id": response.data["id"], "message": "success"}
        return response

    def update(self, request, *args, **kwargs):
        response = super().update(request, *args, **kwargs)
        if response.status_code == status.HTTP_200_OK:
            response.data = {"id": response.data["id"], "message": "success"}
        return response

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(
            {"id": kwargs["pk"], "message": "success"}, status=status.HTTP_200_OK
        )
