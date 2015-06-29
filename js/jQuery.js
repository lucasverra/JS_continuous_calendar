$(document).ready(function() {

	// RENDERIZAR CALENDARIO VACIO CADA VEZ QUE SE CARGA LA PAGINA (ESTATICO)
	for (var s=1; s<53; s++){
		var id = "semana"+s;
		$('.tabla-casilleros').append('<div id="'+id+'" class="row"></div>');

		for (var i=1+(s-1)*7; i<8+(s-1)*7; i++){
		 		var dia = moment().startOf('week').add(i,"days").format("DD");
		 		var month = moment().startOf('week').add(i,"days").format("MM");
		 		var year = moment().startOf('week').add(i,"days").format("YYYY");
		 		if (dia=='01'){
		 			var monthLong = moment().startOf('week').add(i,"days").format("MMMM");
		 			dia = '01 ' + monthLong;
		 		}
		  		$("#semana"+s).append('<div id="'+dia+'-'+month+'-'+year+'"class="col-xs-2 casillero-dia"><h5>'+dia+'</h5></div>');
		}
	}
		
	$( ".casillero-dia" ).click(function() {
  		var $fecha = $(this)[0].id;
    	$('#fecha-dialogo-evento').html('<h3>Date: '+$fecha+'</h3>');
    	$('#dialogo-evento').css('visibility', 'visible');
    	$('.tabla-casilleros').css('opacity', '0.2');
    	$('.header').css('opacity', '0.2');
    	
	});
	
	$( "#cerrar-dialogo-evento" ).click(function() {
    	$('#dialogo-evento').css('visibility', 'hidden');
    	$('.tabla-casilleros').css('opacity', '1');
    	$('.header').css('opacity', '1');
	});



	// PEDIR BASE DE DATOS EN JSON A SERVER CON HTTP GET
	// MOSTRAR EN CALENDARIO LOS EVENTOS LEVANTADOS DE LA BASE DE DATOS



	//DETECTAR CLICKS SOBRE CASILLEROS DIV DE DIA QUE VISUALICE UN MICROFORM 
	//AL ACEPTAR USUARIO, HACE UN HTTP POST CON EL JSON DE LA DATA DEL EVENTO
 

});

function getMonday() { 
		
		var monday = moment().startOf('week').add(1,"days").format("DD");
		return monday; 
} 

           
