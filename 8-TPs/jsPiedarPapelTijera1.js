/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
    var eleccionMaquina;
    var max;
    var min;

    max=4;
    min=1;

    eleccionMaquina=Math.floor(Math.random()*(max-min))+min;
    console.log(eleccionMaquina);
}//FIN DE LA FUNCIÓN
function piedra()
{
    switch (eleccionMaquina){
        case "1":
            alert("Usted empató");          
            break;
        case "2":
            alert("Usted perdió");
            break;
        case "3":
            alert("Usted ganó");
            break;
    }
}//FIN DE LA FUNCIÓN
function papel()
{
    switch (eleccionMaquina){
        case "1":
            alert("Usted ganó");          
            break;
        case "2":
            alert("Usted empató");
            break;
        case "3":
            alert("Usted perdió");
            break;
    }
}//FIN DE LA FUNCIÓN
function tijera()
{
    switch (eleccionMaquina){
        case "1":
            alert("Usted perdió");          
            break;
        case "2":
            alert("Usted ganó");
            break;
        case "3":
            alert("Usted empató");
            break;
    }
}//FIN DE LA FUNCIÓN