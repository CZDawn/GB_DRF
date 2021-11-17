from rest_framework import mixins
from rest_framework import viewsets

from .models import TodoUser
from .serializers import TodoUserModelSerializer


class TodoUserViewSet(mixins.ListModelMixin,
                      mixins.RetrieveModelMixin,
                      mixins.UpdateModelMixin,
                      viewsets.GenericViewSet):
    queryset = TodoUser.objects.all()
    serializer_class = TodoUserModelSerializer

