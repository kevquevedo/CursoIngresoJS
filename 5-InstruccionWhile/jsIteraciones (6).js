function mostrar()
{

	var contador=0;
	var acumulador=0;
	var dato;

	//dato = prompt("Ingrese un valor");

	while(contador<5){
	contador++;
	dato = prompt("Ingrese un numero");
	dato = parseInt(dato);
		while(isNaN(dato)){
		dato = prompt("Ingrese un numero valido");
		dato = parseInt(dato);
		}
	acumulador=acumulador+dato;
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN