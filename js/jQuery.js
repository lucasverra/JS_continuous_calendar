$(document).ready(function() {

	// RENDERIZAR CALENDARIO VACIO CADA VEZ QUE SE CARGA LA PAGINA (ESTATICO)

	for (var i=0; i<7; i++){
	 		var dia = getMonday(new Date())+i;
	 		$('#semana1').append('<div class="col-xs-2 casillero-dia">'+dia+'</div>');
	}


	// PEDIR BASE DE DATOS EN JSON A SERVER CON HTTP GET
	// MOSTRAR EN CALENDARIO LOS EVENTOS LEVANTADOS DE LA BASE DE DATOS



	//DETECTAR CLICKS SOBRE CASILLEROS DIV DE DIA QUE VISUALICE UN MICROFORM 
	//AL ACEPTAR USUARIO, HACE UN HTTP POST CON EL JSON DE LA DATA DEL EVENTO
 

});


function getMonday(d) { 
		// d = new Date(d); 
		var day = d.getDay(); 
		var diff = d.getDate() - day + (day == 0 ? -6:1); 

		// adjust when day is sunday 
		return diff; 
} 


