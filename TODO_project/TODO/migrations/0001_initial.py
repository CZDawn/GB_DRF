# Generated by Django 3.2.6 on 2021-11-16 20:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128, verbose_name='название проекта')),
                ('repo_link', models.CharField(max_length=256, verbose_name='ссылка на репозиторий')),
            ],
        ),
        migrations.CreateModel(
            name='ToDo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128, verbose_name='заголовок заметки')),
                ('text', models.TextField(blank=True, verbose_name='текст заметки')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='дата создания заметки')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='дата последнего обновления заметки')),
                ('active_tag', models.BooleanField(default=True, verbose_name='статус заметки')),
            ],
        ),
    ]
