function listadoUsuario(){
    $.ajax({
        url: "/cambios/listar_beneficiario/",
        type: "get",
        dataType: "json",
        success: function(response){
            if($.fn.DataTable.isDataTable('#tabla_beneficiario')){
                $('#tabla_beneficiario').DataTable().destroy();
            }
            $('#tabla_beneficiario').DataTable();
            $('#tabla_beneficiario tbody').html("");
            for(let i = 0; i < response.length; i++){
                let fila = '<tr>';
                    fila += '<td>' + response[i]["pk"] + '</td>';
                    fila += '<td>' + response[i]["fields"]['nombre_be'] + '</td>';
                    fila += '<td>' + response[i]["fields"]['cedula'] + '</td>';
                    fila += '<td>' + response[i]["fields"]['tipo_documento'] + '</td>';
                    fila += '<td>' + response[i]["fields"]['nombre_banco'] + '</td>';
                    fila += '<td>' + response[i]["fields"]['numero_cuenta'] + '</td>';
                    fila += '<td>' + response[i]["fields"]['tipo_cuenta'] + '</td>';
                    fila += '<td>' + response[i]["fields"]['fecha_creacion'] + '</td>';
                    fila += '<td> <button type="button" class="btn btn-primary"';
                    fila += 'onclick="abrir_modal_edicion(\'/cambios/actualizar_beneficiario/'+response[i]["pk"]+'\');">EDITAR</button>';
                    fila += '<button type="button" class="btn btn-danger"';
                    fila += 'onclick="abrir_modal_eliminacion(\'/cambios/eliminar_beneficiario/'+response[i]["pk"]+'\');">ELIMINAR</button></td>';
                    fila += '</tr>';
                    $('#tabla_beneficiario tbody').append(fila);
            }

        },
        error: function(error){
            console.log(error);
        }
    });
}

function registrar(){
    activarBoton();
    $.ajax({
        data: $('#form_creacion').serialize(),
        url: $('#form_creacion').attr('action'),
        type: $('#form_creacion').attr('method'),
        success: function(response){
            notificacionSuccess(response.mensaje);
            listadoUsuario();
            cerrar_modal_creacion();
        },
        error:function(error){
            notificacionError(error.responseJSON.mensaje);
            mostrarErroresCreacion(error);
            activarBoton();
        }
    });
}

function editar(){
    activarBoton();
    $.ajax({
        data: $('#form_edicion').serialize(),
        url: $('#form_edicion').attr('action'),
        type: $('#form_edicion').attr('method'),
        success: function(response){
            notificacionSuccess(response.mensaje);
            listadoUsuario();
            cerrar_modal_edicion();
        },
        error:function(error){
            notificacionError(error.responseJSON.mensaje);
            mostrarErroresEdicion(error);
            activarBoton();
        }
    });

}

function eliminar(pk){
    console.log($("[name='csrfmiddlewaretoken']").val());
    $.ajax({
        data:{
            csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val()
        },
        url: '/cambios/eliminar_beneficiario/'+pk+'/',
        type: 'post',
        success: function(response){
            notificacionSuccess(response.mensaje);
            listadoUsuario();
            cerrar_modal_eliminacion();
        },
        error:function(error){
            notificacionError(error.responseJSON.mensaje);
        }
    });

}


$(document).ready(function(){
    listadoUsuario();
});
