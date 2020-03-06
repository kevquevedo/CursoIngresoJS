/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var temporizador;
function comenzar()
{
    var operadorRandom;
    var resultado;
    var max=5;
    var min=1;
    operadorRandom=Math.floor(Math.random()*(max-min))+min;
    operadorRandom=parseInt(operadorRandom);
    document.getElementById("PrimerNumero").value=10;
    document.getElementById("SegundoNumero").value=2;


    switch(operadorRandom){
        case 1:
            document.getElementById("Operador").value = "/";
            resultado=10/2;
            break;
        case 2:
            document.getElementById("Operador").value = "*";
            resultado=10*2;
            break;
        case 3:
            document.getElementById("Operador").value = "+";
            resultado=10+2;
            break;
        case 4:
            document.getElementById("Operador").value = "-";
            resultado=10-2;
            break;
    }
    document.getElementById("Respuesta").value = resultado;
}//FIN DE LA FUNCIÓN
function Responder()
{
	


}//FIN DE LA FUNCIÓN
