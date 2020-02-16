/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    var dato;
    
    dato = document.getElementById("elNombre").value;
    dato=parseInt(dato);

    dato=8*5;
    descuento=1;
    dato=dato*descuento;

    alert(dato);
}


