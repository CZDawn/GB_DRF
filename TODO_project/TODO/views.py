from django.shortcuts import get_object_or_404
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer

from .models import Project, ToDo
from .filters import ProjectFilter
from .serializers import ProjectModelSerializer, ProjectModelSerializerBase, ToDoModelSerializer


class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectLimitOffsetPagination
    #permission_classes = [permissions.IsAuthenticated]
    filterset_class = ProjectFilter

    def get_serializer_class(self):
        if self.request.method in ['GET']:
            return ProjectModelSerializer
        return ProjectModelSerializerBase


class ToDoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class ToDoViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    pagination_class = ToDoLimitOffsetPagination
    filterset_fields = ['project']
    serializer_class = ToDoModelSerializer

