import json

from django.test import TestCase
from mixer.backend.django import mixer
from rest_framework import status
from rest_framework.test import APIRequestFactory, APIClient, APITestCase

from .views import TodoUserViewSet
from .models import TodoUser
from ..TODO.models import Project


class TestTodoUserViewSet(TestCase):
    url = '/api/users/'

    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get(self.url)
        view = TodoUserViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_guest(self) -> None:
        factory = APIRequestFactory()
        request = factory.post(self.url, {'first_name': 'Владимир', \
                                         'last_name': 'Высоцкий', \
                                         'email': 'vysockiy@example.com', \
                                         'password': '123'}, format='json')
        view = TodoUserViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_guest_mixer(self):
        user = mixer.blend(TodoUser, username='Guest')
        response = self.client.get(f'{self.url}{user.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response_guest = json.loads(response.content)
        self.assertEqual(response_guest['username'], 'Guest')

    def test_get_detail(self):
        user = TodoUser.objects.create(username='TestUserGuest', \
                                       first_name='Name_1', \
                                       last_name='Surname_1', \
                                       email='testguest@example.com')
        client = APIClient()
        response = client.get(f'/api/users/{user.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_edit_guest(self):
        user = TodoUser.objects.create(username='TestUserGuest', \
                                       first_name='Name_1', \
                                       last_name='Surname_1', \
                                       email='testguest@example.com')
        client = APIClient()
        response = client.put(f'/api/users/{user.id}/', \
                              {'first_name':'Грин', 'last_name': 'Last'})
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)


class TestProjectViewSet(APITestCase):
    url = '/api/project/'

    def test_get_projects_list(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_project_mixer(self):
        project = mixer.blend(Project, name='TestProject_1')
        response = self.client.get(f'{self.url}{project.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

