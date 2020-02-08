/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var productoIngresadoUno;
    var productoIngresadoDos;
    var productoIngresadoTres;
    var productoParseadoUno;
    var productoParseadoDos;
    var productoParseadoTres;
    var resultado;

    productoIngresadoUno = document.getElementById("PrecioUno").value;
    productoIngresadoDos = document.getElementById("PrecioDos").value;
    productoIngresadoTres = document.getElementById("PrecioTres").value;
    productoParseadoUno = parseInt(productoIngresadoUno);
    productoParseadoDos = parseInt(productoIngresadoDos);
    productoParseadoTres = parseInt(productoIngresadoTres);
    resultado = productoParseadoUno+productoParseadoDos+productoParseadoTres;
    resultado = "La suma de los productos es "+resultado;
    alert(resultado);	
}
function Promedio () 
{
    var productoIngresadoUno;
    var productoIngresadoDos;
    var productoIngresadoTres;
    var productoParseadoUno;
    var productoParseadoDos;
    var productoParseadoTres;
    var resultado;

    productoIngresadoUno = document.getElementById("PrecioUno").value;
    productoIngresadoDos = document.getElementById("PrecioDos").value;
    productoIngresadoTres = document.getElementById("PrecioTres").value;
    productoParseadoUno = parseInt(productoIngresadoUno);
    productoParseadoDos = parseInt(productoIngresadoDos);
    productoParseadoTres = parseInt(productoIngresadoTres);
    resultado = (productoParseadoUno+productoParseadoDos+productoParseadoTres)/3;
    resultado = "El promedio de los productos es "+resultado;
    alert(resultado);	
}
function PrecioFinal () 
{
    var productoIngresadoUno;
    var productoIngresadoDos;
    var productoIngresadoTres;
    var productoParseadoUno;
    var productoParseadoDos;
    var productoParseadoTres;
    var resultado;
    var resultadoFinal;

    productoIngresadoUno = document.getElementById("PrecioUno").value;
    productoIngresadoDos = document.getElementById("PrecioDos").value;
    productoIngresadoTres = document.getElementById("PrecioTres").value;
    productoParseadoUno = parseInt(productoIngresadoUno);
    productoParseadoDos = parseInt(productoIngresadoDos);
    productoParseadoTres = parseInt(productoIngresadoTres);
    resultado = productoParseadoUno+productoParseadoDos+productoParseadoTres;
    precioIva = (productoParseadoUno+productoParseadoDos+productoParseadoTres)*0.21;
    resultadoFinal = resultado+precioIva;
    resultadoFinal = "El precio final de los productos es "+resultadoFinal;
    alert(resultadoFinal);		
}