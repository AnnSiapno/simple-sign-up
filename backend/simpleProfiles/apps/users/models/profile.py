from django.db import models
from django.utils import timezone


class Profile(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    bio = models.CharField(max_length=120)
    created_date = models.DateTimeField(
            default=timezone.now)
    birthday = models.DateTimeField()
