/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var operador;
var resultadoFinal;

function comenzar()
{
    var numeroRandom1;
    var numeroRandom2;
    var operador;
    //var maximo = 11;
    //var minimo = 1;
   

    numeroRandom1 = Math.floor(Math.random()*(11-1))+1;
    numeroRandom2 = Math.floor(Math.random()*(11-1))+1;
    operador = Math.floor(Math.random()*(5-1))+1;
    console.log(numeroRandom1);
    console.log(numeroRandom2);
    console.log(operador);

    
    switch(operador){
        case 1:
        operador = "+";
        resultadoFinal = numeroRandom1 + numeroRandom2;
        break;
        case 2:
        operador = "-";
        resultadoFinal = numeroRandom1 - numeroRandom2;
        break;
        case 3:
        operador = "*";
        resultadoFinal = numeroRandom1 * numeroRandom2;
        break;
        case 4:
        operador = "/";
        resultadoFinal = numeroRandom1 / numeroRandom2;
        break;
    }
document.getElementById("Operador").value = operador;
document.getElementById("PrimerNumero").value = numeroRandom1;
document.getElementById("SegundoNumero").value = numeroRandom2;
}//FIN DE LA FUNCIÓN
function Responder()
{

    respuesta = document.getElementById("Respuesta").value;
    respuesta = parseInt(respuesta);

if(resultadoFinal==respuesta)
{
    alert("Ganó");
} else {
    alert("Perdió");
}

}//FIN DE LA FUNCIÓN
