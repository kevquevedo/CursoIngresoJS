/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numero1;
    var numero2;
    var numero1Parseado;
    var numero2Parseado;

    numero1 = document.getElementById("numeroUno").value;
    
    numero2 = document.getElementById("numeroDos").value;

    numero1Parseado = parseInt(numero1);

    numero2Parseado = parseInt(numero2);

    resultado = numero1Parseado + numero2Parseado;

    resultado = "La suma es "+resultado;

    alert(resultado);




    



}

