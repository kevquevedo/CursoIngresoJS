function mostrar()
{
    var respuesta;
    var numero;
    var letra;
    var numeroMaximo;
    var numeroMinimo;
    var letraMaximo;
    var letraMinimo;
    var promedioPositivo;
    var contadorPares=0;
    var contadorImpares=0;
    var contadorPositivo=0;
    var contadorCeros=0;
    var acumuladorPositivo=0;
    var acumuladorNegativo=0;
    var primeraVez=true;    

    do {
        do{
            letra = prompt("Por favor, ingrese una letra");
        } while(letra=="");
        do{
            numero = prompt("Por favor, ingrese un numero");
            numero = parseInt(numero);  
        } while(isNaN(numero) || numero < -100 || numero > 100);

        if (numero%2==0){
            contadorPares++;
        } else {
            contadorImpares++;
        }
        if (numero>0){
            contadorPositivo++;
            acumuladorPositivo+=numero;
        } else if (numero==0){
            contadorCeros++;
        } else if (numero<0){
            acumuladorNegativo+=numero;
        }
        if(primeraVez){
            primeraVez = false;
            numeroMaximo = numero;
            numeroMinimo = numero;
            letraMaximo = letra;
            letraMinimo = letra;
        } else if (numero>numeroMaximo){
            numeroMaximo = numero;
            letraMaximo = letra;
        } else if (numero<numeroMinimo){
            numeroMinimo = numero;
            letraMinimo = letra;
        }
        respuesta = confirm("Desea continuar?");
    } while (respuesta);

    if (contadorPositivo>0){
        promedioPositivo = acumuladorPositivo / contadorPositivo;
    } else {
        promedioPositivo = "No se ingresaron numeros positivos";        
    }

document.write("La cantidad de números pares es: "+contadorPares+"<br>");
document.write("La cantidad de números impares es: "+contadorImpares+"<br>");
document.write("La cantidad de ceros es: "+contadorCeros+"<br>");
document.write("El promedio de todos los números positivos ingresados es: "+promedioPositivo+"<br>");
document.write("La suma de todos los números negativos es: "+acumuladorNegativo+"<br>");
document.write("El numero maximo es "+numeroMaximo+" y su letra es "+letraMaximo+"<br>");
document.write("El numero minimo es "+numeroMinimo+" y su letra es "+letraMinimo+"<br>");
}
