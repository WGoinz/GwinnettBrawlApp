from django.db import models


class User(models.Model):
    username = models.CharField(max_length=120)
    email = models.CharField(max_length=120)
    password = models.CharField(max_length=120)
    slogan = models.CharField(max_length=120)
    profilePic = models.TextField()

    def _str_(self):
        return self.username


class Tournament(models.Model):
    name = models.CharField(max_length=120)
    venueAddress = models.CharField(max_length=120)
    date = models.CharField(max_length=120)
    slogan = models.CharField(max_length=120)
    url = models.TextField()
    totalParticipants = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE,
                             blank=True, null=True, related_name="tournaments")

    def _str_(self):
        return self.name


class Event(models.Model):
    name = models.CharField(max_length=120)
    eventPic = models.TextField()
    standings = models.TextField()
    totalEntrants = models.IntegerField()
    tournament = models.ForeignKey(Tournament, on_delete=models.CASCADE,
                                   blank=True, null=True, related_name="events")

    def _str_(self):
        return self.name
