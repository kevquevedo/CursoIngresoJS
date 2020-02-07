/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var valorIngresado;
    var valorParseado;
    var valorDescuento
    var resultado;

    valorIngresado = document.getElementById("importe").value;
    valorParseado = parseInt(valorIngresado);
    valorDescuento = valorIngresado*0.25;
    resultado = valorIngresado-valorDescuento;
    document.getElementById("resultado").value = resultado;
	
}
