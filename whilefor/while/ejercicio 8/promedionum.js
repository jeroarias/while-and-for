    
    let suma 
    let acumuladora = 0;
    let contador =-1;
    while(suma != 0){
    
        suma=parseInt(prompt("INGREE EL NUMERO QUE QUIERE PROMEDIAR"));
        contador++
        acumuladora +=suma;
        
    }
    console.log("EL PROMEDIO DEL NUMERO ES:",acumuladora/contador);