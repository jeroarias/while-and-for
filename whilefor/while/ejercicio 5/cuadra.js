    
    let suma=parseInt(prompt("INGRESE EL LIMITE DE NUMERO QUE DESEA"));
    acumulador=1;
    contador = 1;
    while (contador<=suma) {
        acumulador= acumulador*2;
        console.log("SE ACUMULARON LOS CUADROS",acumulador);
        contador++;
    }
