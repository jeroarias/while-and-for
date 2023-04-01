    
    let impar = parseInt(prompt("DEME EL LIMITE DE NUMEROS"))
    let contador = 0;
    let incremento = 1
    while (incremento <= impar) {
        contador++
        if (contador % 2 != 0) {
            console.log("LOS IMPARES DEL 1 AL", impar, "SON:");
            console.log(contador);
        }

        incremento++
    }