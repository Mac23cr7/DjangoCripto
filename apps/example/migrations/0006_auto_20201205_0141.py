# Generated by Django 2.2.1 on 2020-12-05 06:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('example', '0005_auto_20201205_0102'),
    ]

    operations = [
        migrations.AlterField(
            model_name='beneficiario',
            name='datos',
            field=models.CharField(blank=True, choices=[('', 'SELECCIONE DATOS'), ('MISMOS DATOS', 'MISMOS DATOS'), ('OTROS DATOS', 'OTROS DATOS')], default='MISMOS DATOS', max_length=100, null=True, verbose_name='Tipo de Datos'),
        ),
    ]
