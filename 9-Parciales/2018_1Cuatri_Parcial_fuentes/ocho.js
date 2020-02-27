function mostrar()
{
    var respuesta;
    var numero;
    var letra;

    do {
        do{
            numero=prompt("Ingrese un numero");
            numero=parseInt(numero);
        } while (isNaN(numero) || numero<-10 || numero>10);
        do {
            letra = prompt("Ingrese una letra");
        } while(isNaN(letra) && letra!= "f" && letra != "m");

        respuesta = confirm("Desea continuar?");
    } while (respuesta);

    console.log(numero);
    console.log(letra);



}
