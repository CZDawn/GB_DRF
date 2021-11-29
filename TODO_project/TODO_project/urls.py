from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken import views
from rest_framework.routers import DefaultRouter
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt

from users.views import TodoUserViewSet
from TODO.views import ProjectViewSet, ToDoViewSet


schema_view = get_schema_view(
    openapi.Info(
        title="ToDo_project",
        default_version='0.1',
        description="Documentation to out project",
        contact=openapi.Contact(email="super@example.com"),
        license=openapi.License(name="MIT License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

router = DefaultRouter()
router.register('users', TodoUserViewSet)
router.register('project', ProjectViewSet)
router.register('todo', ToDoViewSet, basename='todo')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
    path('api-token-auth/', views.obtain_auth_token),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), \
         name='schema-redoc'),
    path('graphql/', csrf_exempt(GraphQLView.as_view(graphiql=True))),
]
