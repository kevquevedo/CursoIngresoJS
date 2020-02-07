/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldoIngresado;
    var sueldoParseado;
    var porcentajeAumento;
    var resultado;

    sueldoIngresado = document.getElementById("sueldo").value;
    sueldoParseado = parseInt(sueldoIngresado);
    porcentajeAumento = sueldoParseado*0.10
    resultado = sueldoParseado+porcentajeAumento;
    document.getElementById("resultado").value = resultado;
 
    
}
