from django.urls import path
from django.contrib.auth.decorators import login_required
from django.views.generic import TemplateView
from .views import  Inicio


urlpatterns = [
    path('crear_operacion/',Inicio.as_view(), name = 'crear_operacion'),
    # path('listar_operacion/',ListarOperaciones.as_view(), name = 'listar_operacion'),
]
