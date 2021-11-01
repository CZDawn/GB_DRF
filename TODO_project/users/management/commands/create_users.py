import re
from getpass import getpass
from random import choice, randint
from django.utils.crypto import get_random_string
from django.core.management.base import BaseCommand

from users.models import TodoUser


class Command(BaseCommand):
    help = 'Create superuser or random users'

    def add_arguments(self, parser):
        parser.add_argument(
            'quantity_of_users',
            type=int,
            help='How many users should be created'
        )
        parser.add_argument(
            '-a',
            '--admin',
            action='store_true',
            help='Flag to create an admin user'
        )
        parser.add_argument(
            '-p',
            '--password',
            action='store_true',
            help='Flag to create password for admin user'
        )

    def handle(self, *args, **kwargs):
        FIRST_NAMES = ['Иван', 'Петр', 'Федор']
        LAST_NAMES = ['Иванов', 'Петров', 'Федоров']
        quantity_of_users = kwargs['quantity_of_users']
        admin_flag = kwargs['admin']
        pass_flag = kwargs['password']

        for i in range(quantity_of_users):
            if admin_flag:
                username = input('Enter username: ')
                email = input('Enter email: ')
                email_pattern = r"[\w\-\.]+@([\w]+\.)+[\w]"
                if re.match(email_pattern, email):
                    if  pass_flag:
                        user_password = getpass()
                        TodoUser.objects.create_superuser(
                            username=username,
                            password=user_password,
                            email=email
                        )
                    else:
                        TodoUser.objects.create_superuser(
                            username=username,
                            email=email
                        )
                else:
                    print('You entered an incorret email!')
            else:
                username = f'user_{randint(1, 10)}'
                TodoUser.objects.create_user(
                    username=username,
                    first_name=choice(FIRST_NAMES),
                    last_name=choice(LAST_NAMES),
                    email=f'{username}@example.com'
                )

