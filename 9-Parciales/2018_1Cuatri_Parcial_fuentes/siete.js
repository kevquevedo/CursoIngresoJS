function mostrar()
{
    var nota;
    var notaMinima;
    var sexo;
    var sexoMinimo;
    var contador=0;
    var contadorVarones=0;
    var acumuladorNota=0;
    var primeraVez=true;

    do{
        do{
            nota = prompt("Por favor, ingrese una nota:");
            nota = parseInt(nota);
        } while (isNaN(nota) || nota < 0 || nota > 10);
        do{
            sexo = prompt("Por favor, ingrese un sexo: ");
        } while ( sexo.toLowerCase() != "f" && sexo.toLocaleLowerCase() != "m");

        if(primeraVez){
            primeraVez = false;
            notaMinima = nota;
            sexoMinimo = sexo;
        } else if (nota < notaMinima){
            notaMinima = nota;
            sexoMinimo  =sexo;
        }
        if(sexo.toLowerCase() == "m" && nota >= 6){
            contadorVarones++;
        }
        //alert("nota "+nota+ "; sexo"+sexo);
        acumuladorNota+=nota;
        contador++;
    } while (contador<5);

    if (contador > 0){
        promedioNota = acumuladorNota/5;
    } else {
        alert("No se han ingresado notas. Por favor, ingrese una nota minimamente");
    }
    document.write("El promedio de las notas totales es= "+promedioNota+"<br>");
    document.write("La nota mas baja es "+notaMinima+", y su sexo es: "+sexoMinimo+"<br>");
    document.write("La cantidad de varones que su nota es igual o mayor a 6 es: "+contadorVarones+"<br>");
}

