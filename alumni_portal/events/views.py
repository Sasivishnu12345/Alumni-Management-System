from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Event
from .serializers import EventSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    parser_classes = (MultiPartParser, FormParser)   # ✅ allows image uploads
