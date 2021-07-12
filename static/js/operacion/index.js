function listadoOperacion(){
    $.ajax({
        url: "/cambios/listar_operacion_no_validada/",
        type: "get",
        dataType: "json",
        success: function(response){
            console.log(response);
            if($.fn.DataTable.isDataTable('#tabla_operacion')){
                $('#tabla_operacion').DataTable().destroy();
            }
            $('#tabla_operacion').DataTable();
            $('#tabla_operacion tbody').html("");
            for(let i = 0; i < response.length; i++){
                let fila = '<tr>';
                    fila += '<td>' + response[i]["pk"] + '</td>';
                    fila += '<td>' + response[i]['nombreb'] + '</td>';
                    fila += '<td>' + response[i]['cedula'] + '</td>';
                    fila += '<td>' + response[i]['tipo_documento'] + '</td>';
                    fila += '<td>' + response[i]['nombre_banco'] + '</td>';
                    fila += '<td>' + response[i]['numero_cuenta'] + '</td>';
                    fila += '<td>' + response[i]['tipo_cuenta'] + '</td>';
                    fila += '<td>' + response[i]['monto_dolares'] + '</td>';
                    fila += '<td>' + response[i]['tasa_actual'] + '</td>';
                    fila += '<td>' + response[i]['monto_bolivares'] + '</td>';
                    fila += '<td>';
                    fila += '<image src="'+ response[i]['cargar_documento'] +'" width="100" height="80"></image>';
                    fila += '</td>';
                    fila += '<td>' + response[i]['nombred'] + '</br>'+ response[i]['numer_tlfn'] + '</br>'+ response[i]['correo'] + '</td>';
                    fila += '<td> <button type="button" class="btn btn-success"';
                    fila += 'onclick="abrir_modal_eliminacion(\'/cambios/validar_operacion/' + response[i]["pk"] +'\');">VALIDAR</button>';
                    fila += '<button type="button" class="btn btn-warning"';
                    fila += 'onclick="#">STANDBY</button></td>';
                    fila += '</tr>';
                    $('#tabla_operacion tbody').append(fila);
            }
            setInterval(listadoOperacion, 60000);

        },
        error: function(error){
            console.log(error);
        }
    });
}

function listadoOperacionVal(){
    $.ajax({
        url: "/cambios/listar_operacion_validada/",
        type: "get",
        dataType: "json",
        success: function(response){
            console.log(response);
            if($.fn.DataTable.isDataTable('#tabla_operacion_val')){
                $('#tabla_operacion_val').DataTable().destroy();
            }
            $('#tabla_operacion_val').DataTable();
            $('#tabla_operacion_val tbody').html("");
            for(let i = 0; i < response.length; i++){
                let fila = '<tr>';
                    fila += '<td>' + response[i]["pk"] + '</td>';
                    fila += '<td>' + response[i]['nombreb'] + '</td>';
                    fila += '<td>' + response[i]['cedula'] + '</td>';
                    fila += '<td>' + response[i]['tipo_documento'] + '</td>';
                    fila += '<td>' + response[i]['nombre_banco'] + '</td>';
                    fila += '<td>' + response[i]['numero_cuenta'] + '</td>';
                    fila += '<td>' + response[i]['tipo_cuenta'] + '</td>';
                    fila += '<td>' + response[i]['monto_dolares'] + '</td>';
                    fila += '<td>' + response[i]['tasa_actual'] + '</td>';
                    fila += '<td>' + response[i]['monto_bolivares'] + '</td>';
                    fila += '<td>';
                    fila += '<image src="'+ response[i]['cargar_documento'] +'" width="100" height="80"></image>';
                    fila += '</td>';
                    fila += '<td>' + response[i]['nombred'] + '</td>';
                    fila += '<td>' + response[i]['numer_tlfn'] + '</td>';
                    fila += '<td>' + response[i]['correo'] + '</td>';
                    fila += '<td> <button type="button" class="btn btn-success"';
                    fila += 'onclick="abrir_modal_eliminacion(\'/cambios/pagar_operacion/' + response[i]["pk"] +'\');">PAGAR</button>';
                    fila += '<button type="button" class="btn btn-warning"';
                    fila += 'onclick="#">STANDBY</button></td>';
                    fila += '</tr>';
                    $('#tabla_operacion_val tbody').append(fila);
            }


        },
        error: function(error){
            console.log(error);
        }
    });
}


function registrar(){
    activarBoton();
    var ejemplo = $('#tabla_operacion');
    console.log(ejemplo);
    var data = new FormData($('#form_creacion').get(0));
    console.log(data);
    $.ajax({
        url: $('#form_creacion').attr('action'),
        type: $('#form_creacion').attr('method'),
        data: data,
        cache: false,
        processData: false,
        contentType: false,
        success: function(response){
            notificacionSuccess(response.mensaje);
            // listadoOperacion();
            cerrar_modal_creacion();
        },
        error: function(error){
            notificacionError(error.responseJSON.mensaje);
            mostrarErroresCreacion(error);
            activarBoton();
        }
    });
    event.preventDefault();
}

function validar(pk){
    console.log($("[name='csrfmiddlewaretoken']").val());
    console.log(pk);
    $.ajax({
        data:{
            csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val()
        },
        url: '/cambios/validar_operacion/'+pk+'/',
        type: 'post',
        success: function(response){
            notificacionSuccess(response.mensaje);
            listadoOperacion();
            cerrar_modal_eliminacion();
        },
        error:function(error){
            notificacionError(error.responseJSON.mensaje);
        }
    });

}


function pagar(pk){
    console.log($("[name='csrfmiddlewaretoken']").val());
    console.log(pk);
    $.ajax({
        data:{
            csrfmiddlewaretoken: $("[name='csrfmiddlewaretoken']").val()
        },
        url: '/cambios/pagar_operacion/'+pk+'/',
        type: 'post',
        success: function(response){
            notificacionSuccess(response.mensaje);
            listadoOperacionVal();
            cerrar_modal_eliminacion();
        },
        error:function(error){
            notificacionError(error.responseJSON.mensaje);
        }
    });

}

$(document).ready(function(){
    listadoOperacion();
    listadoOperacionVal();

});
