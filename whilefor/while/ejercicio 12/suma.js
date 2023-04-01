    
    let numeros = parseInt(prompt("INGRSE EL LIMITE DE NUMEROS QUE DESEE"));
    let contador = 0;
    let incremento = 1;
    while (incremento <= numeros) {
        contador = contador + incremento;
        incremento = incremento + 1;
    }
    console.log(contador)