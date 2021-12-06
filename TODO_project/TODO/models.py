from django.db import models

from users.models import TodoUser


class Project(models.Model):
    name = models.CharField(
        verbose_name='название проекта',
        max_length=128)
    repo_link = models.CharField(
        verbose_name='ссылка на репозиторий',
        max_length=256)
    authors = models.ManyToManyField(
        TodoUser,
        verbose_name='авторы проекта')

    def __str__(self):
        return f'Проект: {self.name}'

class ToDo(models.Model):
    project = models.ForeignKey(
        Project,
        verbose_name='проект заметки',
        on_delete=models.CASCADE)
    title = models.CharField(
        verbose_name='заголовок заметки',
        max_length=128,
        blank=False)
    text = models.TextField(
        verbose_name='текст заметки',
        blank=True)
    created_at = models.DateTimeField(
        verbose_name='дата создания заметки',
        auto_now_add=True)
    updated_at = models.DateTimeField(
        verbose_name='дата последнего обновления заметки',
        auto_now=True)
    author = models.ForeignKey(
        TodoUser,
        verbose_name='автор заметки',
        on_delete=models.CASCADE)
    active_tag = models.BooleanField(
        verbose_name='статус заметки',
        blank=False,
        default=True)

    def __str__(self):
        return f'Заметка: {self.title}'

