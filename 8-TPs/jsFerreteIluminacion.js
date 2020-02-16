/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidadLampara;
    var precioLampara;
    var marcaLampara;
    var descuento;
    var importeTotal;
    var importeFinal;
    var ingresoBruto;

    precioLampara = 35;
    cantidadLampara = document.getElementById("Cantidad").value;
    marcaLampara = document.getElementById("Marca").value;
    cantidadLampara=parseInt(cantidadLampara);

    if(cantidadLampara>=6){
        descuento=0.5;
    } else {
        if(cantidadLampara==5){
            if(marcaLampara=="ArgentinaLuz"){
                descuento=0.6;
            } else {
                descuento=0.7;
            }
        } else {
            if(cantidadLampara==4){
                if(marcaLampara=="ArgentinaLuz"||marcaLampara=="FelipeLamparas"){
                    descuento=0.75;
                } else {
                    descuento=0.8;
                }
            } else {
                if(cantidadLampara==3){
                    if(marcaLampara=="ArgentinaLuz"){
                        descuento=0.85;
                    } else {
                        if(marcaLampara=="FelipeLamparas"){
                            descuento=0.9;
                        } else {
                            if(marcaLampara!="ArgentinaLuz"&&marcaLampara!="FelipeLamparas"){
                                descuento=0.95;
                            } else {
                                if(cantidadLampara<=2){
                                    descuento=1;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    importeTotal=(cantidadLampara*precioLampara)*descuento;
    ingresoBruto=importeTotal*0.10;

    if(importeTotal>=120){
        importeFinal=importeTotal+ingresoBruto;
        document.getElementById("precioDescuento").value=importeFinal;
        alert("Usted pagó "+ingresoBruto+" de ingresos brutos");        
    } else {
        document.getElementById("precioDescuento").value=importeTotal;
    }
}
