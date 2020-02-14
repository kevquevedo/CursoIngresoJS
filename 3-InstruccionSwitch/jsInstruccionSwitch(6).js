function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

switch(laHora){
    case "1":
    case "2":
    case "3":
    case "4":
        alert("Es de Noche");
        break;
    default:
        alert("Es de Dia");
        break;
}

}//FIN DE LA FUNCIÓN