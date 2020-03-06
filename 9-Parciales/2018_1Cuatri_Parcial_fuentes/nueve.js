function mostrar()
{
    var marca;
    var marcaMaximo;
    var marcaMinimo;
    var peso;
    var pesoMaximo;
    var pesoMinimo;
    var temperatura;
    var respuesta;
    var promedioPeso;
    var contadorTemperaturaPar=0;
    var contadorConservados=0;
    var contadorPeso=0;
    var acumuladorPeso=0;
    var primeraVez=true;

    do{
        do{
            marca = prompt("Por favor, ingrese una marca:");
        } while ( marca == "");
        do{
            peso = prompt("Por favor, ingrese un peso:");
            peso = parseInt(peso);
        } while ( isNaN(peso) || peso < 1 || peso > 100 );
        do{
            temperatura = prompt("Por favor, ingrese una temperatura:");
            temperatura = parseInt(temperatura);
        } while ( isNaN(temperatura) || temperatura < -30 || temperatura > 30 );

        if ( temperatura%2 == 0){
            contadorTemperaturaPar++;
        }

        if ( temperatura < 0){
            contadorConservados++;
        }

        if ( primeraVez ){
            primeraVez=false;
            pesoMaximo=peso;
            marcaMaximo=marca;
            pesoMinimo=peso;
            marcaMinimo=marca;
        } else if ( peso>pesoMaximo ){
            pesoMaximo=peso;
            marcaMaximo=marca;
        } else if ( peso<pesoMinimo ){
            pesoMinimo=peso;
        }
        contadorPeso++;
        acumuladorPeso+=peso;
        respuesta = confirm("Desea continuar?");
    } while (respuesta);

    if ( contadorPeso > 0 ){
        promedioPeso=acumuladorPeso/contadorPeso;
    } else {
        promedioPeso="No se ingresó el peso de ninguna marca.";
    }

    document.write("La cantidad de temperaturas pares es: "+contadorTemperaturaPar+"<br>");
    document.write("La marca del producto más pesado es: "+marcaMaximo+"<br>");
    document.write("La cantidad de productos que se conservan a menos de 0 grados es: "+contadorConservados+"<br>");
    document.write("El promedio del peso de todos los productos es: "+promedioPeso+"<br>");
    document.write("El peso maximo es: "+pesoMaximo+"; y el peso minimo es: "+pesoMinimo+"<br>");
}
