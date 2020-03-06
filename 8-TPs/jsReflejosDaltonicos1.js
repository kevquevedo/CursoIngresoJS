/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var colorParametro;
var tiempoInicio = new Date;
function comenzar()
{
    var colorElegido;
    var random;
    var min = 1;
    var max = 7;

    tiempoInicio = new Date();

    random = Math.floor(Math.random()*(max-min))+min;

    switch(random){
        case 1: 
        ColorSecreto="Azul";
        break;
        case 2:
        ColorSecreto="Amarillo";
        break;
        case 3:
        ColorSecreto="Marron";
        break;
        case 4:
        ColorSecreto="Verde";
        break;
        case 5:
        ColorSecreto="Celeste";
        break;
        case 6:
        ColorSecreto="Rojo";
        break;
    }

document.getElementById("ColorElejido").value = ColorSecreto;

}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
    var tiempoFinal;
    var tiempoTotal;
    var tiempoFinal = new Date;

    tiempoTotal = tiempoFinal - tiempoInicio;
    tiempoTotal /= 100;
    console.log(colorParametro);

    if(colorParametro==ColorSecreto){
        alert("Gano y tardó "+tiempo+" segundos.");
    } else {
        alert("Usted perdio");
    }
	
	


}//FIN DE LA FUNCIÓN
