from django import forms
from betterforms.multiform import MultiModelForm
from .models import Solicitante, Beneficiario, Operacion

class SolicitanteForm(forms.ModelForm):
    class Meta:
        model = Solicitante
        fields = ['nombre_sol', 'tipo_documento_sol', 'cedula_sol', 'correo_sol']
        labels = {
            'nombre_sol': 'Nombre del Solicitante',
            'tipo_documento_sol': 'Tipo Documento del Solicitante',
            'cedula_sol': 'Cedula del Solicitante',
            'correo_sol': 'Correo del Solicitante',
        }
        widgets = {
            'nombre_sol': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese el nombre del Solicitante'
                }
            ),
            'tipo_documento_sol':forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese tipo de Documento del Solicitante'
                }
            ),
            'cedula_sol': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese cedula del Solicitante'
                }
            ),
            'correo_sol': forms.EmailInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese correo del Solicitante'
                }
            )
        }

class BeneficiarioForm(forms.ModelForm):
    class Meta:
        model = Beneficiario
        fields = ['tipo_datos','nombre_ben', 'tipo_documento_ben', 'cedula_ben', 'correo_ben', 'nombre_banco', 'tipo_cuenta', 'numero_cuenta', 'wallet']
        labels = {
            'tipo_datos': 'Datos del Beneficiario',
            'nombre_ben': 'Nombre del Beneficiario',
            'tipo_documento_ben': 'Tipo Documento del Beneficiario',
            'cedula_ben': 'Cedula del Beneficiario',
            'correo_ben': 'Correo del Beneficiario',
            'nombre_banco': 'Nombre del Banco',
            'tipo_cuenta': 'Tipo de Cuenta',
            'numero_cuenta': 'Numero de Cuenta',
            'wallet': 'Dirección del Wallet',
        }
        widgets = {
            'tipo_datos': forms.Select(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese tipo de Datos',
                    'id': 'datos'
                }
            ),
            'nombre_ben': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese el nombre del Beneficiario',
                    'id': 'nombre'
                }
            ),
            'tipo_documento_ben':forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese tipo de Documento del Beneficiario',
                    'id':'tipo_documento'
                }
            ),
            'cedula_ben': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese cedula del Beneficiario',
                    'id':'cedula'
                }
            ),
            'correo_ben': forms.EmailInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese correo del Beneficiario',
                    'id':'correo'
                }
            ),
            'nombre_banco': forms.Select(
                attrs = {
                    'class':'form-control',
                    'placeholder': 'Ingrese nombre del Banco',
                    'id':'nombre_banco'
                }
            ),
            'tipo_cuenta': forms.RadioSelect(
                attrs = {
                    'placeholder': 'Ingrese tipo  de Cuenta',
                    'id':'tipo_cuenta'
                }
            ),
            'numero_cuenta': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder': 'Ingrese numero de Cuenta',
                    'id':'numero_cuenta'
                }
            ),
            'wallet': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder': 'Ingrese dirección del Wallet',
                    'id':'numero_wallet'
                }
            )
        }

class OperacionForm(forms.ModelForm):
    class Meta:
        model = Operacion
        fields = ['tipo_operacion', 'tipo_cripto', 'monto_principal', 'monto_cripto', 'monto_total', 'num_referencia', 'cargar_documento']
        labels = {
            'tipo_operacion': 'Tipo de Operacion',
            'tipo_cripto': 'Tipo de Cripto',
            'monto_principal': 'Monto Principal',
            'monto_cripto': 'Monto Cripto',
            'monto_total': 'Monto Total',
            'num_referencia': 'Numero Referencia',
            'cargar_documento': 'Adjuntar Documento',
        }
        widgets = {
            'tipo_operacion': forms.Select(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Seleccione Tipo de Operación',
                    'id': 'tipo_operacion'
                }
            ),
            'tipo_cripto': forms.Select(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Seleccione Tipo de Cripto',
                    'id': 'tipo_operacion'
                }
            ),
            'monto_principal': forms.NumberInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese monto Principal',
                    'id':'monto_principal'
                }
            ),
            'monto_cripto': forms.NumberInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese Monto en Criptos',
                    'id':'monto_cripto'
                }
            ),
            'monto_total': forms.NumberInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Monto Total',
                    'id':'monto_total'
                }
            ),
            'num_referencia': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese Numero Referencia',
                    'id':'num_referencia'
                }
            ),
            'cargar_documento': forms.FileInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Cargar Documento',
                    'id':'cargar_documento'
                }
            )
        }

class OperacionTotalModelForm(MultiModelForm):
    form_classes = {
        'solicitante': SolicitanteForm,
        'operacion': OperacionForm,
        'beneficiario': BeneficiarioForm
    }
