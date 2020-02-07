/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
    var numeroIngresado1;
    var numeroIngresado2;
    var numeroParseado1;
    var numeroParseado2;
    var resultado;

    numeroIngresado1 =document.getElementById("numeroUno").value;
    numeroIngresado2 =document.getElementById("numeroDos").value;
    numeroParseado1 = parseInt(numeroIngresado1);
    numeroParseado2 = parseInt(numeroIngresado2);
    resultado = numeroParseado1+numeroParseado2;
    resultado = "La suma es "+resultado;
    alert(resultado);
	
}

function restar()
{
    var numeroIngresado1;
    var numeroIngresado2;
    var numeroParseado1;
    var numeroParseado2;
    var resultado;

    numeroIngresado1 = document.getElementById("numeroUno").value;
    numeroIngresado2 = document.getElementById("numeroDos").value;
    numeroParseado1 = parseInt(numeroIngresado1);
    numeroParseado2 = parseInt(numeroIngresado2);
    resultado = numeroParseado1-numeroParseado2;
    resultado = "La resta es "+resultado;
    alert(resultado);
	
}

function multiplicar()
{
    var numeroIngresado1;
    var numeroIngresado2;
    var numeroParseado1;
    var numeroParseado2;
    var resultado;

    numeroIngresado1 = document.getElementById("numeroUno").value;
    numeroIngresado2 = document.getElementById("numeroDos").value;
    numeroParseado1 = parseInt(numeroIngresado1);
    numeroParseado2 = parseInt(numeroIngresado2);
    resultado = numeroParseado1*numeroParseado2;
    resultado = "La multiplicación es "+resultado;
    alert(resultado); 
	
}

function dividir()
{
    var numeroIngresado1;
    var numeroIngresado2;
    var numeroParseado1;
    var numeroParseado2;
    var resultado;

    numeroIngresado1 = document.getElementById("numeroUno").value;
    numeroIngresado2 = document.getElementById("numeroDos").value;
    numeroParseado1 = parseInt(numeroIngresado1);
    numeroParseado2 = parseInt(numeroIngresado2);
    resultado = numeroParseado1/numeroParseado2;
    resultado = "La división es "+resultado;
    alert(resultado); 
	
}

