from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateTimeField()
    location = models.CharField(max_length=200, blank=True, null=True)
    image = models.ImageField(upload_to='event_images/', blank=True, null=True)  # NEW

    def __str__(self):
        return self.title
