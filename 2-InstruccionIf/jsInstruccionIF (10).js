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
		alert(numeroRandom+" su nota es EXCELENTE");
	} else {
		if(numeroRandom > 4){
			alert(numeroRandom+" con esta nota APROBÓ");
		} else {
			alert(numeroRandom+" Vamos, la proxima se puede");
		}
	}
	

}//FIN DE LA FUNCIÓN