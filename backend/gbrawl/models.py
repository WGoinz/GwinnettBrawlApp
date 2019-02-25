from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    username = models.CharField(max_length=120)
    email = models.CharField(max_length=120)
    password = models.CharField(max_length=120)
    slogan = models.CharField(max_length=120)
    profilePic = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE,
                             blank=True, null=True, related_name="profiles")

    def __str__(self):
        return self.username


class Tournament(models.Model):
    name = models.CharField(max_length=120)
    venueAddress = models.CharField(max_length=120)
    date = models.CharField(max_length=120)
    url = models.TextField()
    totalParticipants = models.IntegerField()
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE,
                                blank=True, null=True, related_name="tournaments")

    def __str__(self):
        return self.name


class Event(models.Model):
    name = models.CharField(max_length=120)
    eventPic = models.TextField()
    standings = models.TextField()
    totalEntrants = models.IntegerField()
    tournament = models.ForeignKey(Tournament, on_delete=models.CASCADE,
                                   blank=True, null=True, related_name="events")

    def __str__(self):
        return self.name


class Participant(models.Model):
    gamertag = models.CharField(max_length=120)
    placement = models.IntegerField()
    event = models.ForeignKey(Event, on_delete=models.CASCADE,
                              blank=True, null=True, related_name="participants")

    def __str__(self):
        return self.gamertag
