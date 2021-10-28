from rest_framework.serializers import HyperLinkedModelSerializer
from .models import TodoUser


class TodoUserModelSerializer(HyperLinkedModelSerializer):
    class Meta:
        model = TodoUser
        fields = '__all__'
