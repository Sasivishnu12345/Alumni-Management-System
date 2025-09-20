from rest_framework import viewsets
from .models import Alumni, Event, Gallery
from .serializers import AlumniSerializer, EventSerializer, GallerySerializer

class AlumniViewSet(viewsets.ModelViewSet):
    queryset = Alumni.objects.all().order_by("name")
    serializer_class = AlumniSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all().order_by("-date")
    serializer_class = EventSerializer

class GalleryViewSet(viewsets.ModelViewSet):
    queryset = Gallery.objects.all().order_by("-uploaded_at")
    serializer_class = GallerySerializer
