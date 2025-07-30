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
    UpdateStoryPagesSerializer,
    MultipleImageGenerationSerializer,
    MultipleImageResponseSerializer
)
from core.models import Gender, Interest, StoryType, Request, Titles as TitleModel, Pages
import os
from dotenv import load_dotenv
import openai
from openai import OpenAIError
import requests
import json
from django.core.files.base import ContentFile
from datetime import datetime



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


class MultipleImageGenerationView(APIView):
    serializer_class = MultipleImageGenerationSerializer
    
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if not serializer.is_valid():
            return Response(
                {"error": "Dados inválidos", "details": serializer.errors},
                status=status.HTTP_400_BAD_REQUEST,
            )

        title_id = serializer.validated_data["title_id"]
        size = serializer.validated_data["size"]
        
        try:
            title = TitleModel.objects.select_related('request__gender', 'request__interest', 'request__story_type').get(id=title_id)
            request_data = title.request
            
            pages = Pages.objects.filter(title=title).order_by('id')
            
            if not pages.exists():
                return Response(
                    {"error": "Nenhuma página encontrada para este título"},
                    status=status.HTTP_404_NOT_FOUND,
                )
            
            generated_images = []
            
            for index, page in enumerate(pages, 1):
                prompt = f"""Atenção proibido: não inclua nenhuma palavra, letra, número, sinal, logotipo ou marca d’água na imagem. 
                O que você deve fazer: Você é um ilustrador infantil para o público de {request_data.gender.name}s, você está ilustrando uma história {request_data.story_type.name} sobre {request_data.interest.name} para crianças com {request_data.age} anos. Use essas referências para gerar a imagem: {page.page}. É importante que o personagem principal tenha os seguintes detalhes: {request_data.protagonist_description} e que a ilustração seja condizente com as referências que eu te passei.Não quero nenhuma palavra, símbolo ou letra na imagem. A imagem deve ser inteiramente ilustrativa. Ilustre com realismo infantil, sem elementos fantásticos ou inventados. Todos os animais no cenário devem ser fiéis à realidade. Por exemplo, animais terrestres não devem ter asas. O estilo da imagem deve ser sempre o mesmo: ilustração vetorial infantil, com traços suaves, colorido vibrante e fundo limpo. Estilo semelhante a ilustrações infantis modernas, com aparência simples e amigável. Apenas um estilo limpo, vetorial e infantil. Todos os personagens e cenários devem seguir esse estilo fixo, sem variação. """
                
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
                    if img_response.status_code == 200:
                        import os
                        from django.conf import settings
                        from core.models import Image
                        from django.core.files.base import ContentFile

                        image_filename = f"page_{page.id}_image_{index} {datetime.now()}.png"
                        relative_path = os.path.join('generated_images', image_filename)
                        full_path = os.path.join(settings.MEDIA_ROOT, relative_path)

                        os.makedirs(os.path.dirname(full_path), exist_ok=True)
                        
                        with open(full_path, 'wb') as f:
                            f.write(img_response.content)

                        image_instance = Image(
                            url=relative_path,
                            page=page
                        )
                        image_instance.save()

                        generated_images.append({
                            "page_id": page.id,
                            "page_index": index,
                            "page_content": page.page,
                            "image_url": request.build_absolute_uri(settings.MEDIA_URL + relative_path),
                            "local_path": relative_path,
                            "image_id": image_instance.id,
                            "prompt_used": prompt
                        })
                    else:
                        generated_images.append({
                            "page_id": page.id,
                            "page_index": index,
                            "page_content": page.page,
                            "error": "Falha ao baixar a imagem gerada",
                            "prompt_used": prompt
                        })
                        
                except OpenAIError as e:
                    generated_images.append({
                        "page_id": page.id,
                        "page_index": index,
                        "page_content": page.page,
                        "error": f"Erro na API do OpenAI: {str(e)}",
                        "prompt_used": prompt
                    })
                    
            response_data = {
                "images": generated_images,
                "message": f"Processo de geração concluído. {len([img for img in generated_images if 'image_url' in img])} imagens geradas com sucesso de {len(generated_images)} páginas.",
                "total_images": len([img for img in generated_images if 'image_url' in img]),
                "title_info": {
                    "title_id": title.id,
                    "title": title.title,
                    "total_pages": len(pages)
                }
            }
            
            return Response(response_data, status=status.HTTP_200_OK)
            
        except TitleModel.DoesNotExist:
            return Response(
                {"error": "Título não encontrado com o ID fornecido"},
                status=status.HTTP_404_NOT_FOUND,
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