function mostrar()
{
  var peso;
  var acumuladorPeso=0;
  var precio;
  var precioConDescuento;
  var precioAlimMasCaro;
  var acumuladorPrecio=0;
  var origenAlim;
  var origenAlimMasCaro;
  var descuento;
  var respuesta;
  var calculadorPrecio;
  var promedioPrecioKilo;
  var banderaAlimentoMasCaro=0;

  do{
    do{
		  peso = prompt("Por favor, ingrese el peso (En kilos) :");
			peso = parseInt(peso);
		} while ( isNaN(peso) || peso<10 || peso>1000 );
		do{
			precio = prompt("Por favor, ingrese el precio por kilo:");
			precio = parseInt(precio);
    } while ( isNaN(precio) || precio<1 );
    do{
			origenAlim = prompt("Por favor, ingrese el origen del producto:");
		} while ( origenAlim!="v" && origenAlim!="a" && origenAlim!="m" );

    calculadorPrecio=peso*precio;
    acumuladorPrecio+=calculadorPrecio;
    acumuladorPeso+=peso;
    respuesta = confirm("Desea continuar?");
  } while (respuesta);
   
  if ( acumuladorPeso>300 ){
    descuento=0.75;
  } else if ( acumuladorPeso>100 ){
    descuento=0.85;
  } else {
    descuento=1;
  }

  if ( banderaAlimentoMasCaro==0 || precio>precioAlimMasCaro  ){
    banderaAlimentoMasCaro++;
    origenAlimMasCaro=origenAlim;
    precioAlimMasCaro=precio;
  } 

  precioConDescuento = acumuladorPrecio * descuento;
  promedioPrecioKilo = acumuladorPrecio/acumuladorPeso;

  alert("El importe bruto a pagar es: "+acumuladorPrecio+", y el precio con descuento es: "+precioConDescuento);
  alert("El tipo de alimento mas caro es: "+origenAlimMasCaro);
  alert("El promedio de precio por kilo en total es: "+promedioPrecioKilo);
}
