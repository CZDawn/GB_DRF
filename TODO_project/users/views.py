from rest_framework import mixins
from rest_framework import viewsets

from .models import TodoUser
from .serializers import TodoUserModelSerializer, \
                         TodoUserModelSerializerSuperAndStaff


class TodoUserViewSet(mixins.CreateModelMixin,
                      mixins.ListModelMixin,
                      mixins.RetrieveModelMixin,
                      mixins.UpdateModelMixin,
                      viewsets.GenericViewSet):
    queryset = TodoUser.objects.all()
    # serializer_class = TodoUserModelSerializer

    def get_serializer_class(self):
        if self.request.version == '0.2':
            return TodoUserModelSerializerSuperAndStaff
        return TodoUserModelSerializer

