from rest_framework import generics
from .models import GalleryImage
from .serializers import GallerySerializer

class GalleryListCreateView(generics.ListCreateAPIView):
    queryset = GalleryImage.objects.all().order_by('-uploaded_at')
    serializer_class = GallerySerializer
