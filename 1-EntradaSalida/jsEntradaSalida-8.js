/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var numeroIngresado1;
    var numeroIngresado2;
    var numeroParseado1;
    var numeroParseado2;
    var resultado;

    numeroIngresado1 =document.getElementById("numeroDividendo").value;
    numeroIngresado2 =document.getElementById("numeroDivisor").value;
    numeroParseado1 = parseInt(numeroIngresado1);
    numeroParseado2 = parseInt(numeroIngresado2);
    resultado = numeroParseado1%numeroParseado2;
    resultado = "El resto es "+resultado;
    alert(resultado);
	
}
