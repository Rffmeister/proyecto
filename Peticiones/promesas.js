function miPrimeraPromesa(numero){
    return new Promise ((resolve, reject) => {
        setTimeout( () => {
            if (numero === 5){
                resolve("Si cumplio la promesa")
            } else {
                reject("No se cumplio la promesa")
            }
            //numero === 5
              //  ? resolve("Si cumplio la promesa")
              //  : reject("No se cumplio la promesa")

        },3000)
    }); 
}

// Ejecucion de la funcion y se recibe la respuesta
// Then -----> resolve()
// Catch -----> reject()
// resolve y reject reciben un parametro y lo recibes en el callback de 
//     then(callback(parametroX)) & catch(callback(parametrosX))

miPrimeraPromesa(5)
    .then((resolve) => {
        console.log(resolve); 
    })
    .catch((reject) => {
        console.log(reject); 
    })




























