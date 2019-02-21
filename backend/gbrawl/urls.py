from django.urls import path, include
from . import views
# from rest_framework import routers
from rest_framework_nested import routers

router = routers.DefaultRouter()
router.register(r'users', views.UserView)

domains_router = routers.NestedSimpleRouter(router, r'users', lookup='user')
domains_router.register(
    r'tournaments', views.TournamentView, base_name='user-tournaments')

# router.register("tournaments", views.TournamentView)
# router.register('events', views.EventView)
# router.register('participants', views.ParticipantView)


urlpatterns = [
    path(r'', include(router.urls)),
    path(r'', include(domains_router.urls)),
]
