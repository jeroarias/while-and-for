
    let x = 0;
    let contador = 0;
    while (x <= 100) {
        if (x % 2 != 0) {
            contador++;
            console.log("IMPAR", x)
        }
        x = x + 1

    }

    console.log("SON", contador, " IMPARES")