from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer, TournamentSerializer, EventSerializer, ParticipantSerializer
from .models import User, Tournament, Event, Participant


class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class TournamentView(viewsets.ModelViewSet):
    queryset = Tournament.objects.all()
    serializer_class = TournamentSerializer

# class TournamentViewSet(viewsets.ModelViewSet):
#     def get_queryset(self):
#         return Tournament.objects.filter(user=self.kwargs['user_pk'])


class EventView(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class ParticipantView(viewsets.ModelViewSet):
    queryset = Participant.objects.all()
    serializer_class = ParticipantSerializer
