from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer

from .models import Project, ToDo
from users.serializers import TodoUserModelSerializer


class ProjectModelSerializerBase(ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class ProjectModelSerializer(ModelSerializer):
    authors = TodoUserModelSerializer['username']

    class Meta:
        model = Project
        fields = '__all__'


class ToDoModelSerializer(ModelSerializer):
    author = TodoUserModelSerializer['username']

    class Meta:
        model = ToDo
        fields = '__all__'
