function mostrar()
{
//tomo la edad  
var edad;
var mensaje;

edad = document.getElementById("edad").value;
mensaje = "La persona es mayor de edad";
if(edad >= 18)
{
    alert(mensaje);
}


}//FIN DE LA FUNCIÓN