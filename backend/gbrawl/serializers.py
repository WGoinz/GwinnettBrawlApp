from rest_framework import serializers
from .models import User, Tournament, Event, Participant


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'slogan', 'profilePic')


class TournamentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tournament
        fields = ('id', 'name', 'venueAddress',
                  'date', 'url', 'totalParticipants')
