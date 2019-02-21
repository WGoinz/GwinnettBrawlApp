from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer, TournamentSerializer, EventSerializer, ParticipantSerializer
from .models import User, Tournament, Event, Participant


class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
