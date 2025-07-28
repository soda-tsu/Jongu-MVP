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
    
from django.db import models


class Interest(models.Model):
    created_datetime = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class StoryType(models.Model):
    created_datetime = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Gender(models.Model):
    created_datetime = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Request(models.Model):
    created_datetime = models.DateTimeField(auto_now_add=True)
    age = models.IntegerField(null=True, blank=True)
    gender = models.ForeignKey(Gender, on_delete=models.CASCADE)
    interest = models.ForeignKey(Interest, on_delete=models.CASCADE)
    story_type = models.ForeignKey(StoryType, on_delete=models.CASCADE)
    number_of_pages = models.IntegerField()
    story_description = models.CharField(max_length=255, null=True, blank=True)
    protagonist_description = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return f"Request #{self.id}"


class TextStory(models.Model):
    created_datetime = models.DateTimeField(auto_now_add=True)
    content = models.TextField(null=True, blank=True)
    request = models.ForeignKey(Request, on_delete=models.CASCADE)

    def __str__(self):
        return f"TextStory #{self.id}"


class Page(models.Model):
    created_datetime = models.DateTimeField(auto_now_add=True)
    content = models.TextField(null=True, blank=True)
    text_story = models.ForeignKey(TextStory, on_delete=models.CASCADE)

    def __str__(self):
        return f"Page #{self.id}"


class Image(models.Model):
    created_datetime = models.DateTimeField(auto_now_add=True)
    url = models.CharField(max_length=255)
    page = models.ForeignKey(Page, on_delete=models.CASCADE)

    def __str__(self):
        return f"Image #{self.id}"
