from django.db import models

class Solicitante(models.Model):
    id = models.AutoField(primary_key = True)
    nombre_sol = models.CharField('Nombres Solicitante', max_length = 255, null = False, blank = False)
    tipo_documento_sol = models.CharField('Tipo de Documento', max_length = 100, null = False, blank = False)
    cedula_sol = models.CharField('Cedula Solicitante', max_length = 100, null = False, blank = False)
    correo_sol = models.EmailField('Correo Solicitante', null = False, blank = False)

    class Meta:
        verbose_name = 'Solicitante'
        verbose_name_plural = 'Solicitantes'

    # def __str__(self):
    #     return self.nombre_sol


class Beneficiario(models.Model):
    NOMBREBANCO = (
        ('', 'SELECCIONE BANCO'),
        ('PACIFICO', 'PACIFICO'),
        ('BOLIVARIANO', 'BOLIVARIANO')
    )
    TIPODATOS = (
        ('', 'SELECCIONE DATOS'),
        ('MISMOS DATOS', 'MISMOS DATOS'),
        ('OTROS DATOS', 'OTROS DATOS')
    )
    TIPOCUENTA = (
        ('AHORRO', 'AHORRO'),
        ('CORRIENTE', 'CORRIENTE')
    )
    id = models.AutoField(primary_key = True)
    tipo_datos = models.CharField('Tipo de Datos', choices = TIPODATOS, max_length = 100, null = True, blank = True)
    nombre_ben = models.CharField('Nombre Beneficiario', max_length = 100, null = True, blank = True)
    tipo_documento_ben = models.CharField('Tipo de Documento', max_length = 100, null = True, blank = True)
    cedula_ben = models.CharField('Cedula Beneficiario', max_length = 100, null = True, blank = True)
    correo_ben = models.EmailField('Correo Electronico', null = True, blank = True)
    nombre_banco = models.CharField('Nombre del Banco', choices = NOMBREBANCO, max_length = 100, null = True, blank = True)
    tipo_cuenta = models.CharField('Tipo de Cuenta', choices = TIPOCUENTA, max_length = 100, null = True, blank = True)
    numero_cuenta = models.CharField('Numero de Cuenta',max_length = 100, null = True, blank = True)
    wallet = models.CharField('Numero de Wallet',max_length = 100, null = True, blank = True)

    class Meta:
        verbose_name = 'Beneficiario'
        verbose_name_plural = 'Beneficiarios'


class Operacion(models.Model):
    TIPOOPERACION = (
        ('', 'SELECCIONE OPERACIÓN'),
        ('COMPRA', 'COMPRA'),
        ('VENTA','VENTA')
    )
    TIPOCRIPTO = (
        ('', 'SELECCIONE CRIPTO'),
        ('BITCOIN', 'BITCOIN'),
        ('ETHEREUM', 'ETHEREUM'),
        ('DASH', 'DASH'),
        ('RIPLE', 'RIPLE'),
        ('BAT', 'BAT')
    )
    id = models.AutoField(primary_key = True)
    tipo_operacion = models.CharField('Tipo Operación', choices = TIPOOPERACION, max_length = 100, null = False, blank = False)
    tipo_cripto = models.CharField('Tipo Cripto', choices = TIPOCRIPTO, max_length = 100, null = False, blank = False)
    monto_principal = models.IntegerField('Monto Principal', null = False, blank = False)
    monto_cripto = models.IntegerField('Monto Cripto', null = False, blank = False)
    monto_total = models.IntegerField('Monto Total', null = False, blank = False)
    num_referencia = models.CharField('Numero de Referencia',max_length = 100, null = False, blank = False)
    cargar_documento = models.ImageField('Cargar Documento', upload_to = 'operaciones/', null = False, blank = False)
    estado_procesada = models.BooleanField('Procesada/No Procesada', default = False)
    estado_pendiente = models.BooleanField('Pendiente/No Pendiente', default = False)
    fecha_creacion = models.DateField('Fecha de Creación', auto_now = False, auto_now_add = True)
    id_solicitante = models.ForeignKey(Solicitante, on_delete = models.CASCADE)
    id_beneficiario = models.ForeignKey(Beneficiario, on_delete = models.CASCADE)

    class Meta:
        verbose_name = 'Operacion'
        verbose_name_plural = 'Operaciones'

    def __str__(self):
        return "{0},{1}".format(self.id_solicitante.nombre_sol, self.monto_total)
