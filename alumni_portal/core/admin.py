from django.contrib import admin
from .models import Alumni, Event, Gallery

@admin.register(Alumni)
class AlumniAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "batch", "profession", "company")

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ("title", "date", "location")

@admin.register(Gallery)
class GalleryAdmin(admin.ModelAdmin):
    list_display = ("caption", "uploaded_at")
