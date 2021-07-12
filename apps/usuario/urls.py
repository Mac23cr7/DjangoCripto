from django.urls import path
from django.contrib.auth.decorators import login_required
from apps.usuario.views import ListarUsuario, RegistrarUsuario, ActualizarUsuario, EliminarUsuario

urlpatterns = [
    path('listar_usuario', login_required(ListarUsuario.as_view()), name = 'listar_usuario'),
    path('crear_usuario', login_required(RegistrarUsuario.as_view()), name = 'crear_usuario'),
    path('actualizar_usuario/<int:pk>', login_required(ActualizarUsuario.as_view()), name = 'actualizar_usuario'),
    path('eliminar_usuario/<int:pk>/', login_required(EliminarUsuario.as_view()), name = 'eliminar_usuario'),
]
