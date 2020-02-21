function mostrar()
{

	var contador=0;
	var numero;
	var numeroMaximo=0;
	var numeroMinimo=0;
	var primeraIteracion=true;

	// declarar variables
	var respuesta=true;

	while(respuesta){
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		while(isNaN(numero)){
			numero = prompt("Por favor, ingrese un numero válido");
			numero = parseInt(numero);
		}
		if(primeraIteracion){
			primeraIteracion=false;
			numeroMaximo=numero;
			numeroMinimo=numero;
		} else {
			if(numero>numeroMaximo){
				numeroMaximo=numero;
			} else {
				if(numero<numeroMinimo){
					numero=numeroMinimo;
				}
			}
		}
	respuesta=confirm("Desea continuar?");
	}
document.getElementById("maximo").value=numeroMaximo;
document.getElementById("minimo").value=numeroMinimo;
}//FIN DE LA FUNCIÓN