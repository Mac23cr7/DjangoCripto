# Generated by Django 2.2.1 on 2020-12-06 04:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('example', '0011_beneficiario_tipo_datos'),
    ]

    operations = [
        migrations.AlterField(
            model_name='beneficiario',
            name='tipo_cuenta',
            field=models.CharField(blank=True, choices=[('AHORRO', 'AHORRO'), ('CORRIENTE', 'CORRIENTE')], max_length=100, null=True, verbose_name='Tipo de Cuenta'),
        ),
    ]
