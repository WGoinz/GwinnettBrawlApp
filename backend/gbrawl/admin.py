from django.contrib import admin
from .models import Profile, Tournament, Event, Participant

admin.site.register(Profile)
admin.site.register(Tournament)
admin.site.register(Event)
admin.site.register(Participant)
