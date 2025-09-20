from django.urls import path
from .views import GalleryListCreateView

urlpatterns = [
    path('', GalleryListCreateView.as_view(), name='gallery-list'),
]
