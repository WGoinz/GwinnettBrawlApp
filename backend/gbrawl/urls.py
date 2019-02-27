from django.urls import path, include
from . import views
from rest_framework import routers
from rest_framework_nested import routers
# from .views import current_user, UserList

router = routers.DefaultRouter()
router.register(r'profiles', views.ProfileView)
router.register(r'alltournaments', views.TournamentView)

profile_router = routers.NestedSimpleRouter(
    router, r'profiles', lookup='profile')
profile_router.register(
    r'tournaments', views.TournamentView, base_name='profile-tournaments')

tournament_router = routers.NestedSimpleRouter(
    profile_router, r'tournaments', lookup='tournament')
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
    path(r'', include(profile_router.urls)),
    path(r'', include(tournament_router.urls)),
    path(r'', include(event_router.urls)),
    # path('current_user/', current_user),
    # path('auth_users/', UserList.as_view())

]
