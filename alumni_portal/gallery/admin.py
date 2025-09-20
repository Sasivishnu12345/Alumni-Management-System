from django.contrib import admin
from .models import GalleryImage

@admin.register(GalleryImage)
class GalleryAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "uploaded_at")
    search_fields = ("title",)
