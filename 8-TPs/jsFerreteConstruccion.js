/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largoIngresado;
    var anchoIngresado;
    var largoParseado;
    var anchoParseado;
    var resultado;

    largoIngresado = document.getElementById("Largo").value;
    anchoIngresado = document.getElementById("Ancho").value;
    largoParseado = parseInt(largoIngresado);
    anchoParseado = parseInt(anchoIngresado);
    resultado = (largoParseado+anchoParseado)*3;
    resultado = "La cantidad de alambre a comprar es "+resultado;
    alert(resultado);
}
function Circulo () 
{
    var radioIngresado;
    var radioParseado;
    var resultado;

    radioIngresado = document.getElementById("Radio").value;
    radioParseado = parseInt(radioIngresado);
    resultado = (radioParseado+radioParseado)*3.14;
    resultado = "La cantidad de alambre a comprar es "+resultado;
    alert(resultado);	
}
function Materiales () 
{
    var largoIngresado;
    var anchoIngresado;
    var largoParseado;
    var anchoParseado;
    var resultado;

    largoIngresado = document.getElementById("Largo").value;
    anchoIngresado = document.getElementById("Ancho").value;
    largoParseado = parseInt(largoIngresado);
    anchoParseado = parseInt(anchoIngresado);
    resultado = largoParseado*anchoParseado;
    valorCemento = resultado*2;
    valorCal = resultado*3;
    resultado = "La cantidad de bolsas de Cemento es "+valorCemento+" y la cantidad de bolsas de Cal es "+valorCal+".";
    alert(resultado);
	
}