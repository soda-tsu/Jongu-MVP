from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from .serializers import (
    ImageGenerationSerializer, 
    ImageResponseSerializer, 
    StoryGenerationSerializer, 
    StoryResponseSerializer,
    UpdateStoryPagesSerializer
)
from core.models import Gender, Interest, StoryType, Request, Titles as TitleModel, Pages
import os
from dotenv import load_dotenv
import openai
from openai import OpenAIError
import requests
import json
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

class StoryGenerationView(APIView):
    serializer_class = StoryGenerationSerializer
    
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if not serializer.is_valid():
            return Response(
                {"error": "Dados inválidos", "details": serializer.errors},
                status=status.HTTP_400_BAD_REQUEST,
            )
        
        age = serializer.validated_data["age"]
        gender = serializer.validated_data["gender"]
        interests = serializer.validated_data["interests"]
        type_of_story = serializer.validated_data["type_of_story"]
        number_of_pages = serializer.validated_data["number_of_pages"]
        description = serializer.validated_data.get("description", "")
        protagonist_description = serializer.validated_data.get("protagonist_description", "")
        title = serializer.validated_data["title"]
        author = serializer.validated_data["author"]
        
        try: 
            prompt = f"""Você é um escritor de um livro infantil para {gender.name}, você está escrevendo uma história {type_of_story.name} sobre {interests.name} para crianças com {age} anos. Esse livro tem {number_of_pages} páginas e cada página deve ter no máximo 20 palavras. Estes são alguns detalhes adicionais para ajudar você na história: {description}. Sobre o personagem principal: ele tem as seguintes características: {protagonist_description}. Retorne as {number_of_pages} páginas neste formato: ["página1", "página2", ... "pagina{number_of_pages}"]. Responda sempre em português brasileiro."""
            
            print(prompt)
            
            response = openai.chat.completions.create(
                model="gpt-4o-mini",
                messages=[
                    {"role": "user", "content": prompt}
                ],
                max_tokens=10000,
                temperature=0.7
            )
            
            generated_text = response.choices[0].message.content
            
            try:
                pages_list = json.loads(generated_text)
                if not isinstance(pages_list, list):
                    pages_list = [generated_text]
            except json.JSONDecodeError:
                pages_list = [line.strip() for line in generated_text.split('\n') if line.strip()]
                if len(pages_list) != number_of_pages:
                    pages_list = [generated_text]

            request_instance = Request.objects.create(
                age=age,
                gender=gender,
                interest=interests,  # Note que o campo no modelo ainda é 'interest' (singular)
                story_type=type_of_story,
                number_of_pages=number_of_pages,
                story_description=description,
                protagonist_description=protagonist_description,
                author=author
            )
            
            title_instance = TitleModel.objects.create(
                title=title,
                request=request_instance
            )
            
            for i, page_content in enumerate(pages_list, 1):
                Pages.objects.create(
                    page=page_content,
                    title=title_instance
                )
            
            response_data = {
                "pages": pages_list,
                "message": "História gerada e salva com sucesso"
            }
            
            return Response(response_data, status=status.HTTP_201_CREATED)
            
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
            
class UpdateStoryGenerationView(APIView):
    serializer_class = UpdateStoryPagesSerializer
    
    def put(self, request):
        serializer = self.serializer_class(data=request.data)
        if not serializer.is_valid():
            return Response(
                {"error": "Dados inválidos", "details": serializer.errors},
                status=status.HTTP_400_BAD_REQUEST,
            )
        
        title_id = serializer.validated_data["title_id"]
        updated_pages = serializer.validated_data["pages"]
        
        try:
            try:
                title = TitleModel.objects.get(id=title_id)
            except TitleModel.DoesNotExist:
                return Response(
                    {"error": f"Nenhuma história encontrada com o ID {title_id}"},
                    status=status.HTTP_404_NOT_FOUND
                )
            
            existing_pages = list(title.pages_set.all().order_by('id'))
            
            for i, page_text in enumerate(updated_pages):
                if i < len(existing_pages):
                    existing_pages[i].page = page_text
                    existing_pages[i].save()
                else:
                    Pages.objects.create(
                        page=page_text,
                        title=title
                    )
            
            if len(updated_pages) < len(existing_pages):
                for page in existing_pages[len(updated_pages):]:
                    page.delete()

            title.save()
            
            return Response({
                "message": "História atualizada com sucesso"
            }, status=status.HTTP_200_OK)
            
        except Exception as e:
            return Response(
                {"error": "Erro ao atualizar a história", "details": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )