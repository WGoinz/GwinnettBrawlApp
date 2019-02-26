from rest_framework import serializers
from .models import Profile, Tournament, Event, Participant
from rest_framework_jwt.settings import api_settings
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username', 'id')


class UserSerializerWithToken(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ('token', 'username', 'password')


class ParticipantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Participant
        fields = ('id', 'gamertag', 'placement',
                  'event')


class EventSerializer(serializers.ModelSerializer):
    participants = ParticipantSerializer(many=True, read_only=True)

    class Meta:
        model = Event
        fields = ('id', 'name', 'standings',
                  'eventPic', 'totalEntrants', 'tournament', 'participants')


class TournamentSerializer(serializers.ModelSerializer):
    events = EventSerializer(many=True, read_only=True)

    class Meta:
        model = Tournament
        fields = ('id', 'name', 'venueAddress',
                  'date', 'url', 'totalParticipants', 'profile', 'events')


class ProfileSerializer(serializers.ModelSerializer):
    tournaments = TournamentSerializer(many=True, read_only=True)

    class Meta:
        model = Profile
        fields = ('id', 'username', 'email', 'slogan',
                  'profilePic', 'user', 'tournaments')
