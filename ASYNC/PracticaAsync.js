const mayorQueDosHoras = (arreglo, callback) => {
    return callback(arreglo);
}

function compararHoras(arreglo) {

    let nuevoArreglo = [];

    for (let i = 0; i < arreglo.length; i++) {

        if (arreglo[i] >= 120) {
            nuevoArreglo.push(arreglo[i]);
        }
    }

    return nuevoArreglo;
}

const arregloFinal = mayorQueDosHoras([300, 120, 100, 50, 10, 150], compararHoras);


console.log(arreglofinal); 