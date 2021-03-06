# Generated by Django 3.2.6 on 2021-11-16 20:35

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('TODO', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='author',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='автор заметки'),
        ),
        migrations.AddField(
            model_name='todo',
            name='project',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='TODO.project', verbose_name='проект заметки'),
        ),
        migrations.AddField(
            model_name='project',
            name='authors',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL, verbose_name='авторы проекта'),
        ),
    ]
