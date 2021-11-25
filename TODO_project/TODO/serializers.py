from rest_framework.serializers import HyperlinkedModelSerializer

from .models import Project, ToDo
from users.serializers import TodoUserModelSerializer


class ProjectModelSerializer(HyperlinkedModelSerializer):
    authors = TodoUserModelSerializer['username']
    class Meta:
        model = Project
        fields = '__all__'


class ToDoModelSerializer(HyperlinkedModelSerializer):
    author = TodoUserModelSerializer['username']

    class Meta:
        model = ToDo
        fields = '__all__'
