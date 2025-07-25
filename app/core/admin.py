from django.contrib import admin

# Register your models here.
""" Office admin """
# pylint: disable=unused-import

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext as _

from core.models import *

class UserAdmin(BaseUserAdmin):
    """
    Custom admin configuration for user management.

    This class defines the configuration for managing user accounts in the Django admin interface.

    Attributes:
        ordering (list):
            The default ordering of users in the admin interface based on the 'id' field.
        list_display (list):
            The list of fields to display for each user in the admin interface.
        fieldsets (tuple of tuples):
            Defines the structure of the user detail view in the admin interface.
            - The first tuple contains fields related to email and password.
            - The second tuple contains fields related to personal information, like 'first_name'.
            - The third tuple contains fields related to permissions.
            - The fourth tuple contains fields related to important dates, such as 'last_login'.
        add_fieldsets (tuple of tuples):
            Defines the structure for adding a new user in the admin interface.
            - The first tuple is for user creation, including email, password, and other fields.

    Note:
        This class is used to configure the way user accounts
        are displayed and managed in the Django admin interface.
    """

    ordering = ['id']
    list_display = ['email', 'first_name']
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (_('Personal Info'), {'fields': ('first_name',)}),
        (
            _('Permissions'),
            {'fields': ('is_active',
                        'is_staff',
                        'is_superuser')}
        ),
        (_('Important dates'), {'fields': ('last_login',)})
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': (
                    'email',
                    'password1',
                    'password2',
                    'first_name',
                    'is_active',
                    'is_staff',
                    'is_superuser'
                    )
        }),
    )

admin.site.register(User, UserAdmin)