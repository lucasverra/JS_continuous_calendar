$(document).ready(function() {

	// RENDERIZAR CALENDARIO VACIO CADA VEZ QUE SE CARGA LA PAGINA (ESTATICO)
	for (var s=1; s<53; s++){
		var id = "semana"+s;
		$('.tabla-casilleros').append('<div id="'+id+'" class="row"></div>');

		for (var i=1+(s-1)*7; i<8+(s-1)*7; i++){
		 		var dia = moment().startOf('week').add(i,"days").format("DD");
		 		if (dia=='01'){
		 			var month = moment().startOf('week').add(i,"days").format("MMMM");
		 			dia = '1 ' + month;
		 		}
		  		$("#semana"+s).append('<div class="col-xs-2 casillero-dia">'+dia+'</div>');
		}
	}
		


	// PEDIR BASE DE DATOS EN JSON A SERVER CON HTTP GET
	// MOSTRAR EN CALENDARIO LOS EVENTOS LEVANTADOS DE LA BASE DE DATOS



	//DETECTAR CLICKS SOBRE CASILLEROS DIV DE DIA QUE VISUALICE UN MICROFORM 
	//AL ACEPTAR USUARIO, HACE UN HTTP POST CON EL JSON DE LA DATA DEL EVENTO
 

});

function getMonday() { 
		
		var monday = moment().startOf('week').add(1,"days").format("DD");
		return monday; 
} 

           
