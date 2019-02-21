from django.contrib import admin
from .models import User, Tournament, Event, Participant

admin.site.register(User)
admin.site.register(Tournament)
admin.site.register(Event)
admin.site.register(Participant)
