from django.db import models


class User(models.Model):
    username = models.CharField(max_length=120)
    email = models.CharField(max_length=120)
    password = models.CharField(max_length=120)
    slogan = models.CharField(max_length=120)
    profilePic = models.TextField()

    def _str_(self):
        return self.username
