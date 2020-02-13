function mostrar()
{
    var edad;
    var mensaje1;
    var mensaje2;
    var mensaje3;

    edad = document.getElementById("edad").value;
    mensaje1 = "La persona es MAYOR";
    mensaje2 = "La persona es ADOLESCENTE";
    mensaje3 = "La persona es un NIÑO";
    if(edad >= 18){
        alert(mensaje1);
    } else {
        if(edad >= 13){
        alert(mensaje2);
    } else {
        alert(mensaje3);
    }
    }//tomo la edad  




}//FIN DE LA FUNCIÓN