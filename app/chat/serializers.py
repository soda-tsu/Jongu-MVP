from rest_framework import serializers

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
        help_text="Idade da criança (1-18 anos)"
    )
    gender = serializers.CharField(
        max_length=20,
        help_text="Sexo da criança (ex: menino, menina)"
    )
    interest = serializers.CharField(
        max_length=50,
        help_text="Gosto ou interesse da criança"
    )
    story_type = serializers.CharField(
        max_length=50,
        help_text="Tipo de história (ex: aventura, fantasia, educativa)"
    )
    number_of_pages = serializers.IntegerField(
        min_value=1,
        max_value=10,
        help_text="Número de páginas (1-10)"
    )
    details = serializers.CharField(
        required=False,
        allow_blank=True,
        max_length=200,
        help_text="Detalhes adicionais para a história"
    )
    protagonistDetails = serializers.CharField(
        max_length=200,
        help_text="Detalhes adicionais para o personagem principal"
    )
    
    # def validate_age(self, value):
    #     if not value.strip():
    #         raise serializers.ValidationError("A idade não pode ser vazio")
    #     return value.strip()
    
    def validate_gender(self, value):
        if not value.strip():
            raise serializers.ValidationError("O sexo não pode ser vazio")
        return value.strip()
    
    def validate_interest(self, value):
        if not value.strip():
            raise serializers.ValidationError("O gosto não pode ser vazio")
        return value.strip()
    
    def validate_story_type(self, value):
        if not value.strip():
            raise serializers.ValidationError("O tipo de história não pode ser vazio")
        return value.strip()
    
    # def validate_number_of_pages(self, value):
    #     if not value.strip():
    #         raise serializers.ValidationError("O número de páginas não pode ser vazio")
    #     return value.strip()
    
    def validate_details(self, value):
        if not value.strip():
            raise serializers.ValidationError("O detalhe não pode ser vazio")
        return value.strip()
    
    def validate_protagonistDetails(self, value):
        if not value.strip():
            raise serializers.ValidationError("O detalhe do personagem principal não pode ser vazio")
        return value.strip()

class StoryResponseSerializer(serializers.Serializer):
    id = serializers.IntegerField(help_text="ID da história gerada")
    text = serializers.JSONField(help_text="Texto da história em formato JSON")
    message = serializers.CharField(help_text="Mensagem de sucesso")