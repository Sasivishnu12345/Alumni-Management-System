from django.db import models

class Alumni(models.Model):
    name = models.CharField(max_length=100)
    designation = models.CharField(max_length=100, blank=True, null=True)
    company = models.CharField(max_length=150, blank=True, null=True)
    email = models.EmailField(unique=True)
    batch = models.CharField(max_length=20, blank=True, null=True)
    department = models.CharField(max_length=100, blank=True, null=True)  # <-- new

    def __str__(self):
        return f"{self.name} ({self.batch} - {self.department})"
