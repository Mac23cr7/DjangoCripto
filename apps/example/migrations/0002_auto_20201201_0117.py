# Generated by Django 2.2.1 on 2020-12-01 06:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('example', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='operacion',
            old_name='id_solicigtanted',
            new_name='id_solicitanted',
        ),
        migrations.RenameField(
            model_name='operacion',
            old_name='id_solicigtanteu',
            new_name='id_solicitanteu',
        ),
    ]
