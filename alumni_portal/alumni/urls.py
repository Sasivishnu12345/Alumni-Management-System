from django.urls import path
from .views import AlumniListCreateView

urlpatterns = [
    path("", AlumniListCreateView.as_view(), name="alumni-list"),
]
