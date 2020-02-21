function mostrar()
{
	var numero;
	var contadorCeros=0;
	var contadorPares=0;
	var contadorNegativo=0;
	var contadorPositivo=0;
	var sumaNegativo=0;
	var sumaPositivo=0;
	var promedioNegativo;
	var promedioPositivo;
	var diferenciaPosNeg;
	
	//declarar contadores y variables 
	
	var respuesta=true;

	while(respuesta){
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		while(isNaN(numero)){
			numero = prompt("Por favor, ingrese un numero valido");
			numero = parseInt(numero);
		}
	if(numero%2==0){
	contadorPares++;
	  if(numero>0){
		contadorPositivo++;
		sumaPositivo=sumaPositivo+numero;}
	 } else {
		if(numero<0){
			contadorNegativo++;
			sumaNegativo=contadorNegativo+numero;	
		} else {
			if(numero==0){
				contadorCeros++;
			}
		    }
		}
	 respuesta=confirm("Desea continuar");
    }
 diferenciaPosNeg=sumaPositivo+sumaNegativo;
 promedioNegativo=sumaNegativo/contadorNegativo;
 promedioPositivo=sumaPositivo/contadorPositivo;
 document.write("La suma de los negativos es: "+sumaNegativo+"<br>");
 document.write("La suma de los positivos es: "+sumaPositivo+"<br>");
 document.write("La cantidad de positivos es: "+contadorPositivo+"<br>");
 document.write("La cantidad de negativos es: "+contadorNegativo+"<br>");
 document.write("La cantidad de ceros es: "+contadorCeros+"<br>");
 document.write("La cantidad de numeros pares es: "+contadorPares+"<br>");
 document.write("El promedio positivo es: "+promedioPositivo+"<br>");
 document.write("El promedio negativo es: "+promedioNegativo+"<br>");
 document.write("La diferencia entre Positivo y Negativo es: "+diferenciaPosNeg+"<br>");
}//FIN DE LA FUNCIÓN