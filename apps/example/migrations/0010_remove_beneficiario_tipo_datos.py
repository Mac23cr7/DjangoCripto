# Generated by Django 2.2.1 on 2020-12-06 04:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('example', '0009_auto_20201205_2308'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='beneficiario',
            name='tipo_datos',
        ),
    ]
