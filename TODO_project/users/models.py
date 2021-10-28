from django.db import models
from django.contrib.auth.models import AbstractUser


class TodoUser(AbstractUser):
    username = models.CharField(
        verbose_name='имя пользователя',
        max_length=128,
        blank=False,
        null=False,
        unique=True)
    firstname = models.CharField(
        verbose_name='имя',
        max_length=128,
        blank=False,
        null=False)
    lastname = models.CharField(
        verbose_name='фамилия',
        max_length=128,
        blank=False,
        null=False)
    email = models.EmailField(
        verbose_name='адрес эл. почты',
        max_length=254,
        blank=False,
        null=False,
        unique=True)

