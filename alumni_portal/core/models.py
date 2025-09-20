from django.db import models

class Alumni(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    batch = models.CharField(max_length=20)
    profession = models.CharField(max_length=100, blank=True, null=True)
    company = models.CharField(max_length=100, blank=True, null=True)
    profile_pic = models.URLField(blank=True, null=True)  # or ImageField

    def __str__(self):
        return self.name


class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField()
    location = models.CharField(max_length=200)
    image = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title


class Gallery(models.Model):
    caption = models.CharField(max_length=200, blank=True, null=True)
    image = models.URLField()
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.caption or "Image"
