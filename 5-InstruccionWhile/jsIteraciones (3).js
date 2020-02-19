function mostrar()
{
    var clave=prompt("Ingrese el numero clave:"); 
    var contador=0;

    while(clave!="utn750"){
        contador++;
        clave=prompt("Ingrese el numero clave:"); 
        //alert("La clave es correcta.");
        if(contador==3){
            break;
        } else {
            alert("Intentos maximos ingresados");
        }
    }
    alert();
}//FIN DE LA FUNCIÓN
