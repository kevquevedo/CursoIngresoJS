function mostrar()
{
	var numeroRandom;
	var max;
	var min;
	
	max = 11;
	min = 1; 
	
	numeroRandom = Math.floor(Math.random()* (max-min))+min;
	//Genero el número RANDOM entre 1 y 10 
	if(numeroRandom > 8){
		alert("Su nota es: "+numeroRandom+". EXCELENTE.");
	} else {
		if(numeroRandom > 3){
			alert("Su nota es: "+numeroRandom+". APROBÓ.");
		} else {
			alert("Su nota es: "+numeroRandom+". Vamos, la proxima se puede.");
		}
	}
	

}//FIN DE LA FUNCIÓN