from django.contrib.auth.models import User
from apps.users.models import Profile
from rest_framework import viewsets
from apps.users.api.serializers import UserSerializer, ProfileSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all().order_by('-created_date')
    serializer_class = UserSerializer
