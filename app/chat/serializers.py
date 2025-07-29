from rest_framework import serializers
from core.models import Gender, Interest, StoryType

class ImageGenerationSerializer(serializers.Serializer):
    
    title = serializers.CharField(
        required=False,
        max_length=200,
        help_text="Título da imagem (opcional)"
    )
    author = serializers.CharField(
        required=False,
        max_length=200,
        help_text="Autor da imagem (opcional)"
    )
    prompt = serializers.CharField(
        required=True,
        min_length=1,
        max_length=1000,
        help_text="Descrição da imagem que você quer gerar (máximo 1000 caracteres)"
    )
    size = serializers.ChoiceField(
        choices=['256x256', '512x512', '1024x1024'],
        default='1024x1024',
        help_text="Tamanho da imagem a ser gerada (256x256, 512x512 ou 1024x1024)"
    )

    def validate_prompt(self, value):
        if not value.strip():
            raise serializers.ValidationError("O prompt não pode ser vazio")
        return value

class ImageResponseSerializer(serializers.Serializer):

    image_url = serializers.URLField(
        help_text="URL da imagem gerada"
    )

class StoryGenerationSerializer(serializers.Serializer):
    age = serializers.IntegerField(
        min_value=1,
        max_value=18,
        help_text="Idade da criança (1-18 anos)",
        required=True
    )
    gender = serializers.PrimaryKeyRelatedField(
        queryset=Gender.objects.all(),
        help_text="ID do gênero (masculino, feminino, etc.)"
    )
    interests = serializers.PrimaryKeyRelatedField(
        queryset=Interest.objects.all(),
        help_text="ID do interesse principal da criança"
    )
    type_of_story = serializers.PrimaryKeyRelatedField(
        queryset=StoryType.objects.all(),
        help_text="ID do tipo de história (aventura, fantasia, etc.)"
    )
    number_of_pages = serializers.IntegerField(
        min_value=1,
        max_value=10,
        help_text="Número de páginas (1-10)",
        required=True
    )
    description = serializers.CharField(
        required=False,
        allow_blank=True,
        max_length=200,
        help_text="Detalhes adicionais para a história"
    )
    protagonist_description = serializers.CharField(
        max_length=200,
        help_text="Detalhes adicionais para o personagem principal",
        required=False,
        allow_blank=True
    )
    title = serializers.CharField(
        max_length=255,
        help_text="Título da história",
        required=True
    )
    author = serializers.CharField(
        max_length=255,
        help_text="Nome do autor da história",
        required=True
    )
    
    # def validate_age(self, value):
    #     if not value.strip():
    #         raise serializers.ValidationError("A idade não pode ser vazio")
    #     return value.strip()
    
    # def validate_gender(self, value):
    #     if not value.strip():
    #         raise serializers.ValidationError("O sexo não pode ser vazio")
    #     return value.strip()
    
    # def validate_interest(self, value):
    #     if not value.strip():
    #         raise serializers.ValidationError("O gosto não pode ser vazio")
    #     return value.strip()
    
    # def validate_story_type(self, value):
    #     if not value.strip():
    #         raise serializers.ValidationError("O tipo de história não pode ser vazio")
    #     return value.strip()
    
    # def validate_number_of_pages(self, value):
    #     if not value.strip():
    #         raise serializers.ValidationError("O número de páginas não pode ser vazio")
    #     return value.strip()
    
    # def validate_details(self, value):
    #     if not value.strip():
    #         raise serializers.ValidationError("O detalhe não pode ser vazio")
    #     return value.strip()
    
    # def validate_protagonistDetails(self, value):
    #     if not value.strip():
    #         raise serializers.ValidationError("O detalhe do personagem principal não pode ser vazio")
    #     return value.strip()

class StoryResponseSerializer(serializers.Serializer):
    pages = serializers.ListField(
        child=serializers.CharField(),
        help_text="Lista de textos das páginas da história"
    )
    message = serializers.CharField(help_text="Mensagem de sucesso")


class UpdateStoryPagesSerializer(serializers.Serializer):
    title_id = serializers.IntegerField(
        help_text="ID do título da história a ser atualizada",
        required=True
    )
    pages = serializers.ListField(
        child=serializers.CharField(),
        help_text="Lista de textos atualizados das páginas da história",
        required=True
    )

    def validate_title_id(self, value):
        from core.models import Titles as TitleModel
        if not TitleModel.objects.filter(id=value).exists():
            raise serializers.ValidationError("Título não encontrado com o ID fornecido")
        return value