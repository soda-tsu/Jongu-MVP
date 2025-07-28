from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)
# Create your models here.
class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("Users must have an email address")

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)

        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, email, password, **extra_fields):
        user = self.create_user(email, password, **extra_fields)
        user.is_staff = True
        user.is_superuser = True
        user.save()

        return user


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255, blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    created_datetime = models.DateTimeField(auto_now_add=True, null=True)
    lastmodified = models.DateTimeField(auto_now=True, null=True)

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name"]

    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"

    def get_short_name(self):
        return self.first_name

    def __str__(self):
        return self.email
    
class GeneratedImage(models.Model):
    prompt = models.TextField()
    title = models.CharField(max_length=200, blank=True)
    author = models.CharField(max_length=200, blank=True)
    size = models.CharField(max_length=20)
    image = models.ImageField(upload_to='generated_images/')
    #Preciso limitar isso para 10 itens na lista
    #images = models.JSONField(default=list, help_text="Lista de textos")
    #texts = models.JSONField(default=list, help_text="Lista de textos")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        if self.title:
            return f"Imagem {self.id} - {self.title}"
        return f"Imagem {self.id} - {self.prompt[:20]}"

class GeneratedStory(models.Model):
    generated_text = models.JSONField(default=list, help_text="Texto gerado pelo GPT em formato JSON")
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"História {self.id} - {self.generated_text}"