function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

//alert (laHora);
if(laHora<=24 && laHora>=0){
    switch(laHora){
        case "7":
            alert("Es de mañana");
            break;
        case "8":
            alert("Es de mañana");
            break;
        case "9":
            alert("Es de mañana");
            break;
        case "10":
            alert("Es de mañana");
            break;
        case "11":
            alert("Es de mañana");
            break;
        default:
            alert("NO es de mañana");
            break;
    }
} else {
    alert("La hora ingresada no es valida");
}
}//FIN DE LA FUNCIÓN