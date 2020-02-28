function mostrar()
{
    var respuesta;
    var marca;
    var marcaPesoMaximo;
    var peso;
    var pesoMaximo;
    var pesoMinimo;
    var temperatura;
    var contadorTemperaturaPares=0;
    var contadorConservacion=0;
    var contadorPeso=0;
    var acumuladorPeso=0;
    var promedioPeso;
    var primeraVezPeso=true;
    
    do{
        do{
            marca = prompt("Por favor, ingrese la marca del producto");
        } while(marca=="");
        do{
            peso = prompt("Ingrese un peso entre 1 y 100");
            peso = parseInt(peso);
        } while( isNaN(peso) || peso < 1 || peso > 100 );
        do{
            temperatura=prompt("Ingrese una temperatura entre -30 y 30");
            temperatura=parseInt(temperatura);
        } while(isNaN(temperatura) || temperatura<-30 || temperatura>30);

        if(temperatura%2==0){
            contadorTemperaturaPares++;
        } 
        if (temperatura<0){
                contadorConservacion++;
        }
        if(primeraVezPeso){
            primeraVezPeso=false;
            pesoMaximo=peso;
            pesoMinimo=peso;
            marcaPesoMaximo=marca;
            //contadorPeso++;
            //acumuladorPeso=acumuladorPeso+peso;
            } else if (peso>pesoMaximo){
                pesoMaximo=peso;
                marcaPesoMaximo=marca;
                //contadorPeso++;
                //acumuladorPeso=acumuladorPeso+pesoMaximo;
            } else if (peso<pesoMinimo){
                pesoMinimo=peso;
                //contadorPeso++;
                //acumuladorPeso=acumuladorPeso+pesoMinimo;
            }
            contadorPeso++;
            acumuladorPeso+=peso;
            respuesta=confirm("Desea continuar?");
     } while(respuesta);

    if (contadorPeso>0){
        promedioPeso=acumuladorPeso/contadorPeso;
    } else {
        promedio = "No ingreso ningun producto";
    }
    
document.write("La cantidad de temperaturas pares es: "+contadorTemperaturaPares+"<br>");
document.write("La marca del producto más pesado es: "+marcaPesoMaximo+"<br>");
document.write("La cantidad de productos que se conservan a menos de 0 grados es: "+contadorConservacion+"<br>");
document.write("El promedio de peso de todos los productos es: "+promedioPeso+"<br>");
document.write("El peso maximo es: "+pesoMaximo+"<br>");
document.write("El peso minimo es: "+pesoMinimo+"<br>");
}
