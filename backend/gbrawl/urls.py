from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('users', views.UserView)
router.register("tournaments", views.TournamentView)
router.register('events', views.EventView)
router.register('participants', views.ParticipantView)


urlpatterns = [path("", include(router.urls))]
