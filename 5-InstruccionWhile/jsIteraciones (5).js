function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(sexo.toLowerCase()!= "f" && sexo.toLowerCase()!="m"){

    alert("El sexo ingresado es incorrecto");
    sexo = prompt("ingrese f ó m .");

}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN