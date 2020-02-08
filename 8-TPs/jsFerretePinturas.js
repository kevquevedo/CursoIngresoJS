/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var valorIngresado;
    var valorParseado;
    var resultado;

    valorIngresado = document.getElementById("Temperatura").value;
    valorParseado = parseInt(valorIngresado);
    resultado = (valorParseado-32)*0.556;
    resultado = +valorParseado+" grados Fahrenheit son "+resultado+" grados Centigrados.";
    alert(resultado);	
}

function CentigradosFahrenheit () 
{
    var valorIngresado;
    var valorParseado;
    var resultado;

    valorIngresado = document.getElementById("Temperatura").value;
    valorParseado = parseInt(valorIngresado);
    resultado = (valorParseado*1.8)+32;
    resultado = +valorParseado+" grados Centigrados son "+resultado+" grados Fahrenheit.";
    alert(resultado);	
}

