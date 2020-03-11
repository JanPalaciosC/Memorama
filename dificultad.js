
	
	var identificador,nivel;
	
	
	function Difficult(){	
			window.location.assign("/Users/JanPalacios/practicas/memorama.html")
	}

	function getDificultad(){

	if( identificador = document.getElementById("rookie")){
		
		document.getElementsByClassName("button").onclick = function(){Difficult()};
		nivel = localStorage.setItem = 1;

	}else if(identificador = document.getElementById("facil")){
		nivel = localStorage.setItem = 2;
		document.getElementsByClassName("button").onclick = function(){Difficult()};
	

	}else if(identificador = document.getElementById("normal")){
		nivel = localStorage.setItem = 3;
		document.getElementsByClassName("button").onclick = function(){Difficult()};
	
		
	}
}

getDificultad();

