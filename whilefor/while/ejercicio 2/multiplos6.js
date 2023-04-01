   
    let z = 0;
    let x = 0;
    while (z <= 100) {
        if (z % 6 == 0) {
            x++;
            console.log("ESTE ES MULTIPLO 6", z)

        }

        z = z + 1

    }
    console.log("SON", x, "LOS MULTIPLOS DE 6");