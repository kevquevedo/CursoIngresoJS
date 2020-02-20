function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta=true;

	while(respuesta){
		contador++;
		numero = prompt("Ingrese un valor");
		numero = parseInt(numero);
		while(isNaN(numero)){
			numero = prompt("Ingrese un valor valido");
			numero = parseInt(numero);
		}
		acumulador = acumulador + numero;
		respuesta = confirm("Desea continuar?");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN