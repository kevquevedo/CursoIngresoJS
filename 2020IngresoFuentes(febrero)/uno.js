
function mostrar()
{
	var tipoProd;
	var precio;
	var precioMasCaroBarbijo;
	var unidades;
	var unidadesMarCaroBarbijo;
	var marca;
	var fabricante;
	var fabricanteMasCaroBarbijo;
	var contador=0;
	var banderaBarbijo=0;
	var banderaCantidad=0;

	do{
		do{
			tipoProd = prompt("Por favor, ingrese un producto:");
		} while ( tipoProd!="barbijo" && tipoProd!="jabon" && tipoProd!="alcohol" );
		do{
			precio = prompt("Por favor, ingrese un precio:");
			precio = parseInt(precio);
		} while ( isNaN(precio) || precio<100 || precio>300 );
		do{
			unidades = prompt("Por favor, ingrese las unidades:");
			unidades = parseInt(unidades);
		} while ( isNaN(unidades) || unidades<1 || unidades>1000 );
		do{
			marca = prompt("Por favor, ingrese una marca:");
		} while ( marca == "");
		do{
			fabricante = prompt("Por favor, ingrese un fabricante:");
		} while ( fabricante == "");
		contador++;
	} while(contador<5);
	

	if ( tipoProd == "barbijo" && banderaBarbijo == 0 || precio > precioMasCaroBarbijo ){
		banderaBarbijo++;
		precioMasCaroBarbijo = precio;
		unidadesMarCaroBarbijo = unidades;
		fabricanteMasCaroBarbijo = fabricante;
	}

	if ( banderaCantidad ){
		banderaCantidad++;
		unidadesMayorCantidad=unidades;
		fabricanteMayorCantidad=fabricante;
	} else if ( unidades>unidadesMayorCantidad ){
		fabricanteMayorCantidad=fabricante;
	}

	if ( tipoProd=="jabon" ){
		unidadesJabon+=unidades;
	}
	
	alert("Del mas caro de los barbijos, la cantidad es: "+unidadesMarCaroBarbijo+", y el fabricante es: "+fabricanteMasCaroBarbijo);
	alert("Del producto con mas cantidades, el fabricante es: "+fabricanteMayorCantidad);
	alert("La cantidad total de jabones es: "+unidadesJabon);
	//alert("uno");
}