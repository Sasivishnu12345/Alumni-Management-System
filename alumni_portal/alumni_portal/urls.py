from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from events.views import EventViewSet
from django.conf import settings
from django.conf.urls.static import static

# DRF router for EventViewSet
router = routers.DefaultRouter()
router.register(r'events', EventViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # Event router
    path('api/', include(router.urls)),

    # Existing apps
    path('api/alumni/', include('alumni.urls')),
    path('api/gallery/', include('gallery.urls')),

    # Authentication URLs (login, register, JWT)
    path('api/auth/', include('api.urls')),  # <-- new api app
    path('api-auth/', include('rest_framework.urls')),  # optional browsable API login
]

# Serve media files in DEBUG mode
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
