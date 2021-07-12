
function abrir_modal_edicion(url) {
	$('#edicion').load(url, function () {
		$(this).modal('show');
	});
}
function abrir_modal_creacion(url) {
	$('#creacion').load(url, function () {
		$(this).modal('show');
	});
}
function abrir_modal_eliminacion(url) {
	$('#eliminacion').load(url, function () {
		$(this).modal('show');
	});
}
function cerrar_modal_creacion(){
	$('#creacion').modal('hide');
}

function cerrar_modal_edicion() {
	$('#edicion').modal('hide');
}
function cerrar_modal_eliminacion() {
	$('#eliminacion').modal('hide');
}
function activarBoton(){
	if($('#boton_all').prop('disabled')){
		$('#boton_all').prop('disabled',false);
	}else{
		$('#boton_all').prop('disabled', true);
	}
}
// // function mostrarErroresCreacion(errores){
// // 	$('#beneficiario-nombre_be').html("");
// // 	$('#beneficiario-cedula').html("");
// // 	$('#beneficiario-tipo_documento').html("");
// // 	$('#beneficiario-nombre_banco').html("");
// // 	$('#beneficiario-numero_cuenta').html("");
// // 	$('#beneficiario-tipo_cuenta').html("");
// // 	$('#operacion-monto_dolares').html("");
// // 	$('#operacion-tasa_actual').html("");
// // 	$('#operacion-monto_bolivares').html("");
// // 	$('#operacion-cargar_documento').html("");
// // 	$('#depositante-nombre_de').html("");
// // 	$('#depositante-numer_tlfn').html("");
// // 	$('#depositante-correo').html("");
// // 	let error = "";
// // 	let error2 = "";
// // 	let error3 = "";
// // 	let error4 = "";
// // 	let error5 = "";
// // 	let error6 = "";
// // 	let error7 = "";
// // 	let error8 = "";
// // 	let error9 = "";
// // 	let error10 = "";
// // 	let error11 = "";
// // 	let error12 = "";
// // 	let error13 = "";
// // 	// for(let item in errores.responseJSON.error){
// // 		error += '<div class = "alert alert-danger" <strong>' + errores.responseJSON.error['beneficiario-nombre_be'] + '</strong></div>';
// // 		error2 += '<div class = "alert alert-danger" <strong>' + errores.responseJSON.error['beneficiario-cedula'] + '</strong></div>';
// // 		error3 += '<div class = "alert alert-danger" <strong>' + errores.responseJSON.error['beneficiario-tipo_documento'] + '</strong></div>';
// // 		error4 += '<div class = "alert alert-danger" <strong>' + errores.responseJSON.error['beneficiario-nombre_banco'] + '</strong></div>';
// // 		error5 += '<div class = "alert alert-danger" <strong>' + errores.responseJSON.error['beneficiario-numero_cuenta'] + '</strong></div>';
// // 		error6 += '<div class = "alert alert-danger" <strong>' + errores.responseJSON.error['beneficiario-tipo_cuenta'] + '</strong></div>';
// // 		error7 += '<div class = "alert alert-danger" <strong>' + errores.responseJSON.error['operacion-monto_dolares'] + '</strong></div>';
// // 		error8 += '<div class = "alert alert-danger" <strong>' + errores.responseJSON.error['operacion-tasa_actual'] + '</strong></div>';
// // 		error9 += '<div class = "alert alert-danger" <strong>' + errores.responseJSON.error['operacion-monto_bolivares'] + '</strong></div>';
// // 		error10 += '<div class = "alert alert-danger" <strong>' + errores.responseJSON.error['operacion-cargar_documento'] + '</strong></div>';
// // 		error11 += '<div class = "alert alert-danger" <strong>' + errores.responseJSON.error['depositante-nombre_de'] + '</strong></div>';
// // 		error12 += '<div class = "alert alert-danger" <strong>' + errores.responseJSON.error['depositante-numer_tlfn'] + '</strong></div>';
// // 		error13 += '<div class = "alert alert-danger" <strong>' + errores.responseJSON.error['depositante-correo'] + '</strong></div>';
// // 	// }
// // 	console.log(errores.responseJSON.error);
// // 	$('#beneficiario-nombre_be').append(error);
// // 	$('#beneficiario-cedula').append(error2);
// // 	$('#beneficiario-tipo_documento').append(error3);
// // 	$('#beneficiario-nombre_banco').append(error4);
// // 	$('#beneficiario-numero_cuenta').append(error5);
// // 	$('#beneficiario-tipo_cuenta').append(error6);
// // 	$('#operacion-monto_dolares').append(error7);
// // 	$('#operacion-tasa_actual').append(error8);
// // 	$('#operacion-monto_bolivares').append(error9);
// // 	$('#operacion-cargar_documento').append(error10);
// // 	$('#depositante-nombre_de').append(error11);
// // 	$('#depositante-numer_tlfn').append(error12);
// // 	$('#depositante-correo').append(error13);
// // }
// // function mostrarErroresEdicion(errores){
// // 	$('#erroresEdicion').html("");
// // 	let error = "";
// // 	console.log(errores.responseJSON.erro);
// // 	for(let item in errores.responseJSON.error){
// // 		error += '<div class = "alert alert-danger" <strong>' + errores.responseJSON.error[item] + '</strong></div>';
// // 	}
// // 	$('#erroresEdicion').append(error);
// // }
// // function notificacionError(mensaje) {
// // 	swal.fire({
// // 		title: 'Error!',
// // 		text: mensaje,
// // 		icon: 'error'
// // 	})
// // }
// // function notificacionSuccess(mensaje) {
// // 	swal.fire({
// // 		title: 'Buen Trabajo!',
// // 		text: mensaje,
// // 		icon: 'success'
// // 	})
// // }
// // function clic() {
// // 	var num1 = document.getElementById("montoDolares").value;
// // 	var num2 = document.getElementById("montoTasa").value;
// // 	var resultado = parseInt(num1) * parseInt(num2);
// //  	console.log(resultado);
// // 	document.getElementById("montoBolivares").value = resultado;
// // }
// // function clickTasa(){
// // 	var banesco = document.getElementById("nomBanco").value;
// //  	var tasaOtros = parseInt(document.getElementById("tasaOtros").value);
// //  	var tasaBanesco = parseInt(document.getElementById("tasaBanesco").value);
// // 	if(banesco == 'BANESCO'){
// // 	 	document.getElementById("montoTasa").value = tasaBanesco;
// // 	}
// // 	else{
// // 	 	document.getElementById("montoTasa").value = tasaOtros;
// // 	}
// // }
//
function clickShow(){
	var compra = document.getElementById("operacion-tipo_operacion").value;
	var venta = document.getElementById("operacion-tipo_operacion").value;
	if(compra == 'COMPRA'){
	 	document.getElementById("operacion-tipo_cripto").style.display = 'block';
		document.getElementById("operacion-monto_principal").style.display = 'block';
		document.getElementById("operacion-monto_cripto").style.display = 'block';
		document.getElementById("operacion-monto_total").style.display = 'block';
		document.getElementById("operacion-num_referencia").style.display = 'block';
		document.getElementById("operacion-cargar_documento").style.display = 'block';
		document.getElementById("beneficiario-tipo_datos").style.display = 'none';
		document.getElementById("beneficiario-wallet").style.display = 'block';
	}
	if(venta == 'VENTA'){
		document.getElementById("operacion-tipo_cripto").style.display = 'block';
		document.getElementById("operacion-monto_principal").style.display = 'block';
		document.getElementsByName('operacion-monto_principal')[0].placeholder='Monto en Cripto';
		document.getElementById("operacion-monto_cripto").style.display = 'block';
		document.getElementById("operacion-monto_total").style.display = 'block';
		document.getElementsByName('operacion-monto_total')[0].placeholder='Monto Total en Dolares';
		document.getElementById("operacion-num_referencia").style.display = 'block';
		document.getElementById("operacion-cargar_documento").style.display = 'block';
		document.getElementById("beneficiario-tipo_datos").style.display = 'block';
		document.getElementById("beneficiario-wallet").style.display = 'none';
	}
}

function clickDatos(){
	var mismosDatos = document.getElementById("beneficiario-tipo_datos").value;
	var otrosDatos = document.getElementById("beneficiario-tipo_datos2").value;
	if(mismosDatos == 'MISMOS DATOS'){
	 	document.getElementById("beneficiario-nombre_banco").style.display = 'block';
		document.getElementById("beneficiario-tipo_cuenta").style.display = 'block';
		document.getElementById("beneficiario-numero_cuenta").style.display = 'block';
		document.getElementById("beneficiario-nombre_ben").style.display = 'none';
		document.getElementById("beneficiario-tipo_documento_ben").style.display = 'none';
		document.getElementById("beneficiario-cedula_ben").style.display = 'none';
		document.getElementById("beneficiario-correo_ben").style.display = 'none';

	}
	if(otrosDatos == 'OTROS DATOS'){
		document.getElementById("beneficiario-nombre_ben").style.display = 'block';
		document.getElementById("beneficiario-tipo_documento_ben").style.display = 'block';
		document.getElementById("beneficiario-cedula_ben").style.display = 'block';
		document.getElementById("beneficiario-correo_ben").style.display = 'block';
        document.getElementById("beneficiario-nombre_banco").style.display = 'block';
		document.getElementById("beneficiario-tipo_cuenta").style.display = 'block';
		document.getElementById("beneficiario-numero_cuenta").style.display = 'block';
	}
}


//
// // function Sumar() {
// // 	var n1 = document.getElementById('txtN1').value;
// // 	var n2 = document.getElementById('txtN2').value;
// // 	var suma = parseInt(n1) + parseInt(n2);
// // 		  alert("La suma es: "+suma)
// // 	  }
// //
// // $(document).ready(function(){
// // 	var unMinuto = new Date().getTime() + 60000;
// // 	console.log(unMinuto);
// // 	setInterval($("#getting-started").countdown(unMinuto, function(event) {
// //       $(this).text(
// //       event.strftime('%D days %M:%S')
// //       );
// //   }),60000);
// //
// //   $('#mostrarBanesco').on('click',function(){
// //       $('#respuesta-banesco').toggle();
// //    });
// //
// //    $('#mostrarOtros').on('click',function(){
// //        $('#respuesta-otros').toggle();
// //     });
// // });
