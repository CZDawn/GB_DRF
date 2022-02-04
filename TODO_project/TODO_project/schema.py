import graphene
from graphene_django import DjangoObjectType
from users.models import TodoUser
from TODO.models import ToDo, Project


class TodoUserType(DjangoObjectType):
    class Meta:
        model = TodoUser
        fields = '__all__'


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class ToDoType(DjangoObjectType):
    class Meta:
        model = ToDo
        fields = '__all__'


class Query(graphene.ObjectType):
    todo_by_project = graphene.List(ToDoType, project_name=graphene.String(required=False))
    project_by_author = graphene.List(ProjectType, first_name=graphene.String(required=False))

    def resolve_todo_by_project(self, info, project_name=None):
        todo = ToDo.objects.all()
        if project_name:
            todo = todo.filter(project__name=project_name)
        return todo

    def resolve_project_by_author(self, info, first_name=None):
        projects = Project.objects.all()
        if first_name:
            projects = projects.filter(authors__first_name=first_name)
        return projects


schema = graphene.Schema(query=Query)
