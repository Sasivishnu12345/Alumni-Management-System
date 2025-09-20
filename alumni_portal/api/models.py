from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission

# Custom User
class User(AbstractUser):
    # Fix reverse accessor conflicts
    groups = models.ManyToManyField(
        Group,
        related_name='custom_user_set',  # changed from default
        blank=True,
        help_text='The groups this user belongs to.',
        verbose_name='groups',
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='custom_user_set',  # changed from default
        blank=True,
        help_text='Specific permissions for this user.',
        verbose_name='user permissions',
    )

# Alumni
class Alumni(models.Model):
    name = models.CharField(max_length=100)
    designation = models.CharField(max_length=100)
    company = models.CharField(max_length=100, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    batch = models.CharField(max_length=10, blank=True, null=True)
    department = models.CharField(max_length=50, blank=True, null=True)

# Event
class Event(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField(blank=True)
    date = models.DateTimeField()
    location = models.CharField(max_length=150, blank=True)
    image = models.ImageField(upload_to='events/', blank=True, null=True)

# Gallery
class Gallery(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='gallery/')
