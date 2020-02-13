function mostrar()
{
//tomo la edad  
var edad;
var mensaje1;
var mensaje2;

edad = document.getElementById("edad").value;
mensaje1 = "La persona es MAYOR de edad";
mensaje2 = "La persona es MENOR de edad";
if(edad >= 18)
{
    alert(mensaje1);
}
else
{
    alert(mensaje2);
}

}//FIN DE LA FUNCIÓN