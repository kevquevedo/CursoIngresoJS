function mostrar()
{
    var nota;
    var sexo;
    var contador=0;
    var contadorVarones=0;
    var acumuladorNota=0;
    var primeraVez = true;
    var notaMinima;
    var sexoMinimo;
    
    do{
        do{
            nota = prompt("Por favor, ingrese una nota");
            nota = parseInt(nota);
        } while ( isNaN(nota) || nota < 0 || nota > 10);
        do{
            sexo = prompt("Por favor, ingrese el sexo");
        } while ( sexo != "f" && sexo != "m");

        if (primeraVez){
            primeraVez = false;
            notaMinima = nota;
            sexoMinimo = sexo;
        } else if (nota < notaMinima){
            notaMinima = nota;
            sexoMinimo = sexo;
        }
        if ( sexo == "m" && nota >= 6){
            contadorVarones++;
        }
        contador++;
        acumuladorNota+=nota;
    } while (contador<5);
   
    promedioNota = acumuladorNota / contador;
    alert("El promedio de las notas es: "+promedioNota);
    alert("La nota mas baja es "+notaMinima+" , y su sexo es "+sexoMinimo);
    alert("La cantidad de varones que su nota es mayor o igual a 6 es "+contadorVarones);
}
