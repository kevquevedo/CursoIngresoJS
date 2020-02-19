function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	numero=parseInt(numero);
	while(numero<0 || numero>9 || isNaN(numero)){

		alert("El numero ingresado es incorrecto");
		var numero = prompt("ingrese un número entre 0 y 10.");
	}
	document.getElementById("Numero").value = "El numero ingresado es correcto";

}//FIN DE LA FUNCIÓN