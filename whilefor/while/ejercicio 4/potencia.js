    
    let z = parseInt(prompt(" INGRSE UN NUMERO "));
    let x = parseInt(prompt(" INGRSE EL NUMRO DE LA POTENCIA"));
    let potencia = 1;
    let y = 1;

    while (y <= x) {
        potencia *= z;
        y++;
    }
    console.log(potencia)