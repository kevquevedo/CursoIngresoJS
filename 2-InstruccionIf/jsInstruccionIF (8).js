function mostrar()
{
    var edad;
    var estadoCivil;
    var mensaje;

    edad = document.getElementById("edad").value;
    estadoCivil = document.getElementById("estadoCivil").value;
    mensaje = "Es soltero y NO es menor";
    if(edad >= 18 && estadoCivil == "Soltero"){
        alert(mensaje);
    }
//tomo la edad  

	


}//FIN DE LA FUNCIÓN