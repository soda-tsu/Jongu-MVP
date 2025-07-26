from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from .serializers import ImageGenerationSerializer, ImageResponseSerializer
from core.models import GeneratedImage
import os
from dotenv import load_dotenv
import openai
from openai import OpenAIError
import requests
from django.core.files.base import ContentFile



load_dotenv()

try:
    api_key = os.getenv('OPENAI_API_KEY')
    if not api_key:
        raise ValueError("OPENAI_API_KEY não está configurada no .env")
    
    openai.api_key = api_key
except Exception as e:
    print(f"Erro ao configurar OpenAI: {str(e)}")
    raise

class ChatView(APIView):
    def post(self, request):
        return Response({"message": "Hello, World!"})

# usar o gpt-40-mini para gerar os textos
class ImageGenerationView(APIView):
    serializer_class = ImageGenerationSerializer
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if not serializer.is_valid():
            return Response(
                {"error": "Dados inválidos", "details": serializer.errors},
                status=status.HTTP_400_BAD_REQUEST,
            )

        prompt = serializer.validated_data["prompt"]
        size = serializer.validated_data["size"]
        title = serializer.validated_data["title"]
        author = serializer.validated_data["author"]

        valid_sizes = ["256x256", "512x512", "1024x1024"]
        if size not in valid_sizes:
            return Response(
                {
                    "error": "Tamanho de imagem inválido",
                    "details": f"O tamanho deve ser um dos seguintes: {', '.join(valid_sizes)}",
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            response = openai.images.generate(
                model="dall-e-3",
                prompt=prompt,
                size=size,
                n=1,
                response_format="url",  
            )

            image_url = response.data[0].url

            img_response = requests.get(image_url)
            if img_response.status_code != 200:
                return Response(
                    {"error": "Falha ao baixar a imagem gerada"},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )

            image_instance = GeneratedImage(prompt=prompt, size=size, title=title, author=author)
            image_instance.image.save(
                f"{prompt}.png",
                ContentFile(img_response.content)
            )
            image_instance.save()


            response_serializer = ImageResponseSerializer(data={"image_url": image_url})
            response_serializer.is_valid(raise_exception=True)


            return Response({
                "message": "Imagem gerada e salva com sucesso",
                "local_image_url": image_instance.image.url
            })

        except OpenAIError as e:
            return Response(
                {"error": "Erro na API do OpenAI", "details": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
            
        except Exception as e:
            return Response(
                {"error": "Erro interno do servidor", "details": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class GeneratedImagesListView(APIView):
    def get(self, request):
        images = GeneratedImage.objects.all().order_by('-created_at')
        response_data = []
        for image in images:
            response_data.append({
                'id': image.id,
                'prompt': image.prompt,
                'title': image.title,
                'author': image.author,
                'size': image.size,
                'image_url': request.build_absolute_uri(image.image.url),
                'created_at': image.created_at
            })
        return Response(response_data)

class GetImageByIdView(APIView):
    def get(self, request, image_id):
        try:
            image = GeneratedImage.objects.only('id', 'title', 'author', 'image', 'created_at').get(id=image_id)
            response_data = {
                'id': image.id,
                'title': image.title,
                'author': image.author,
                'image_url': request.build_absolute_uri(image.image.url),
                'created_at': image.created_at
            }
            return Response(response_data)
        except GeneratedImage.DoesNotExist:
            return Response(
                {"error": "Imagem não encontrada"}, 
                status=status.HTTP_404_NOT_FOUND
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, 
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
            
class DeleteImageView(APIView):
    def delete(self, request, image_id):
        try:
            image = GeneratedImage.objects.get(id=image_id)
            image.delete()
            return Response({"message": "Imagem excluída com sucesso"}, status=status.HTTP_204_NO_CONTENT)
        except GeneratedImage.DoesNotExist:
            return Response({"error": "Imagem não encontrada"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        prompt = serializer.validated_data["prompt"]
        size = serializer.validated_data["size"]

        valid_sizes = ["256x256", "512x512", "1024x1024"]
        if size not in valid_sizes:
            return Response(
                {
                    "error": "Tamanho de imagem inválido",
                    "details": f"O tamanho deve ser um dos seguintes: {', '.join(valid_sizes)}",
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            response = openai.images.generate(
                model="dall-e-3",
                prompt=prompt,
                size=size,
                n=1,
                response_format="url",  
            )

            image_url = response.data[0].url

            img_response = requests.get(image_url)
            if img_response.status_code != 200:
                return Response(
                    {"error": "Falha ao baixar a imagem gerada"},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )

            image_instance = GeneratedImage(prompt=prompt, size=size)
            image_instance.image.save(
                f"{prompt}.png",
                ContentFile(img_response.content)
            )
            image_instance.save()


            response_serializer = ImageResponseSerializer(data={"image_url": image_url})
            response_serializer.is_valid(raise_exception=True)


            return Response({
                "message": "Imagem gerada e salva com sucesso",
                "local_image_url": image_instance.image.url
            })

        except OpenAIError as e:
            return Response(
                {"error": "Erro na API do OpenAI", "details": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
        except Exception as e:
            return Response(
                {"error": "Erro interno do servidor", "details": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )