# Generated by Django 2.2.1 on 2020-11-30 06:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('usuario', '0003_auto_20201027_1357'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuario',
            name='is_staff',
            field=models.BooleanField(default=True),
        ),
    ]
