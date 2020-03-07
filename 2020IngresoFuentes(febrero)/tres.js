function mostrar()
{
	var nombre;
	var nombreHombreCasadoMasJoven;
	var nombrePasajeroMasViejo;
	var edad;
	var edadPasajeroMasViejo;
	var edadHombreCasadoMasJoven;
	var sexo;
	var sexoPasajeroMasViejo;
	var estadoCivil;
	var respuesta;
	var banderaHombreCasado=0;
	var banderaPasajeroMasViejo=0;
	var contadorMujerCasadaViuda=0;
	var contadorMujer=0;
	var acumuladorEdadMujer=0;
	var promedioEdadMujer;
	var contadorHombreSoltero=0;
	var acumuladorEdadHombreSoltero=0;
	var promedioEdadHombreSoltero;

	do{
		do{
			nombre = prompt("Por favor, ingrese un nombre:");
		} while ( nombre == "");
		do{
			edad = prompt("Por favor, ingrese una edad:");
			edad = parseInt(edad);
    	} while ( isNaN(edad) || edad<18 );
    	do{
			sexo = prompt("Por favor, ingrese un sexo:");
		} while ( sexo!="f" && sexo!="m");
		do{
			estadoCivil = prompt("Por favor, ingrese un estado civil:");
		} while ( estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo" );

		respuesta = confirm("Desea continuar?");
	} while (respuesta);

	if ( sexo == "m" && estadoCivil == "casado" && banderaHombreCasado==0 || edad>edadHombreCasadoMasJoven ){
		banderaHombreCasado++;
		nombreHombreCasadoMasJoven=nombre;
		edadHombreCasadoMasJoven=edad;
	}

	if ( banderaPasajeroMasViejo==0 || edad>edadPasajeroMasViejo ){
		banderaPasajeroMasViejo++;
		edadPasajeroMasViejo=edad;
		sexoPasajeroMasViejo=sexo;
		nombrePasajeroMasViejo=nombre;
	}

	if ( sexo == "f" && estadoCivil=="casado" || estadoCivil=="viudo" ){
		contadorMujerCasadaViuda++;
	}

	if ( sexo=="f" ){
		contadorMujer++;
		acumuladorEdadMujer+=edad;
	}

	if (sexo=="m" && estadoCivil=="soltero"){
		contadorHombreSoltero++;
		acumuladorEdadHombreSoltero+=edad;
	}

	if ( contadorHombreSoltero>0 ){
		promedioEdadHombreSoltero = acumuladorEdadHombreSoltero/contadorHombreSoltero;
	} else {
		promedioEdadHombreSoltero = "No se registraron hombres solteros."
	}

	if ( contadorMujer>0 ){
		promedioEdadMujer = acumuladorEdadMujer/contadorMujer;
	} else {
		promedio = "No se registraron mujeres."
	}

	alert("El nombre del hombre casado mas joven es: "+nombreHombreCasadoMasJoven);
	alert("El nombre del pasajero mas viejo es: "+nombrePasajeroMasViejo+", y su sexo es: "+sexoPasajeroMasViejo);
	alert("La cantidad de mujeres casadas o viudas es: "+contadorMujerCasadaViuda);
	alert("El promedio de edad entre las mujeres es: "+promedioEdadMujer);
	alert("El promedio de edad entre hombres solteros es: "+promedioEdadHombreSoltero);
}