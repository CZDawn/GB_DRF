from rest_framework.serializers import ModelSerializer
from .models import TodoUser


class TodoUserModelSerializer(ModelSerializer):

    class Meta:
        model = TodoUser
        fields = '__all__'
