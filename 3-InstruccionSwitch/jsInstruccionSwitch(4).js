function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
switch(mesDelAño){
    case "Enero":
        alert("Este mes tiene 31 dias.");
        break;
    case "Febrero":
        alert("Este mes tiene 28 dias.");
        break;
    case "Marzo":
        alert("Este mes tiene 31 dias.");
        break;
    case "Mayo":
        alert("Este mes tiene 31 dias.");
        break;
    case "Julio":
        alert("Este mes tiene 31 dias.");
        break;
    case "Agosto":
        alert("Este mes tiene 31 dias.");
        break;
    case "Octubre":
        alert("Este mes tiene 31 dias.");
        break;
    case "Diciembre":
        alert("Este mes tiene 31 dias.");
        break;
    default:
        alert("Este mes tiene 30 dias.");
        break;
}
	
	



}//FIN DE LA FUNCIÓN