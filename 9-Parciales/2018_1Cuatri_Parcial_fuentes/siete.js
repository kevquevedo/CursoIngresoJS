function mostrar()
{
    var nota;
    var sexo;
    var contadorAlumno=0;

    while(contadorAlumno<5){

        contadorAlumno++;
        do {
            nota = prompt("Por favor, ingrese una nota");
            nota = parseInt(nota);
        } while(isNaN(contadorAlumno) || nota>0 || nota<10)
            //nota = prompt("Por favor, ingrese una nota valida");
            //nota = parseInt(nota);
         do {
            sexo = prompt("Por favor, ingrese un sexo (F ó M)");
        } while(sexo.toLowerCase!="f" && sexo.toLowerCase!="m"){
            alert("El sexo ingresado es inválido");
            //sexo = prompt("Por favor, ingrese un sexo (F ó M)");
        }
    }
}
