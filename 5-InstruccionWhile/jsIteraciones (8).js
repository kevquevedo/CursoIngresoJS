function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var acumulador;
	var respuesta=true;

	while(respuesta){
		numero = prompt("Ingrese un numero:");
		numero = parseInt(numero);
		while(isNaN(numero)){
			numero = prompt("Por favor, ingrese un numero valido:");
			numero = parseInt(numero);
		}
		if(numero>=0){
			positivo=positivo+numero;
			} else {
			contador++;
			negativo*=numero;
			}
	respuesta=confirm("Desea continuar?");
	}
if(contador==0){
	negativo=0;
}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;
}//FIN DE LA FUNCIÓN