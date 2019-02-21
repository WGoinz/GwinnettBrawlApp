from django.urls import path, include
from . import views
from rest_framework import routers
from rest_framework_nested import routers

router = routers.DefaultRouter()
router.register(r'users', views.UserView)

user_router = routers.NestedSimpleRouter(router, r'users', lookup='user')
user_router.register(
    r'tournaments', views.TournamentView, base_name='user-tournaments')

tournament_router = routers.NestedSimpleRouter(
    user_router, r'tournaments', lookup='tournament')
tournament_router.register(
    r'events', views.EventView, base_name='tournament-events')

event_router = routers.NestedSimpleRouter(
    tournament_router, r'events', lookup='event')
event_router.register(
    r'participants', views.ParticipantView, base_name='event-participants')

# router.register("tournaments", views.TournamentView)
# router.register('events', views.EventView)
# router.register('participants', views.ParticipantView)


urlpatterns = [
    path(r'', include(router.urls)),
    path(r'', include(user_router.urls)),
    path(r'', include(tournament_router.urls)),
    path(r'', include(event_router.urls)),

]
