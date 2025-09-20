from django.contrib import admin
from .models import Alumni

@admin.register(Alumni)
class AlumniAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "email", "designation", "company")
    search_fields = ("name", "designation", "company", "email")
    list_filter = ("designation", "company")
