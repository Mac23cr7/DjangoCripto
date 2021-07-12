# Generated by Django 2.2.1 on 2020-12-05 06:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('example', '0004_auto_20201204_0129'),
    ]

    operations = [
        migrations.AlterField(
            model_name='beneficiario',
            name='datos',
            field=models.CharField(choices=[('', 'SELECCIONE DATOS'), ('MISMOS DATOS', 'MISMOS DATOS'), ('OTROS DATOS', 'OTROS DATOS')], default='MISMOS DATOS', max_length=100, verbose_name='Tipo de Datos'),
        ),
        migrations.AlterField(
            model_name='operacion',
            name='tipo_cripto',
            field=models.CharField(choices=[('', 'SELECCIONE CRIPTO'), ('BITCOIN', 'BTC'), ('ETHEREUM', 'ETH'), ('DASH', 'DASH'), ('RIPLE', 'XRP'), ('BAT', 'BAT')], max_length=100, verbose_name='Tipo Cripto'),
        ),
        migrations.AlterField(
            model_name='operacion',
            name='tipo_operacion',
            field=models.CharField(choices=[('', 'SELECCIONE OPERACIÓN'), ('COMPRAR', 'COMPRAR'), ('VENDER', 'VENDER')], max_length=100, verbose_name='Tipo Operación'),
        ),
    ]
