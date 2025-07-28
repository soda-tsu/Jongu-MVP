from django.urls import path
from .views import ChatView, ImageGenerationView, GeneratedImagesListView, DeleteImageView, GetImageByIdView, StoryGenerationView

urlpatterns = [
    path('chat/', ChatView.as_view(), name='chat'),
    path('generate-image/', ImageGenerationView.as_view(), name='generate-image'),
    path('generate-story/', StoryGenerationView.as_view(), name='generate-story'),
    path('generated-images/', GeneratedImagesListView.as_view(), name='generated-images'),
    path('delete-image/<int:image_id>/', DeleteImageView.as_view(), name='delete-image'),
    path('get-image-by-id/<int:image_id>/', GetImageByIdView.as_view(), name='get-image-by-id'),
]
