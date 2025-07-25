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