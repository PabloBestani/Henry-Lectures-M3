const promesaA = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesa resuelta con este valor");
        // reject("Promesa rechazada por esta razon");
    }, 2000)
})

//*CASO 1
console.log(promesaA);

//*CASO 2
// promesaA.then((value) => console.log(value));

//*CASO 3
// promesaA.then(
//     (value) => console.log(value), //successHandler
//     (error) => console.log(error)  //errorHandler
//     )


//*CASO 4
// promesaA.then()
// .then(
//     (value) => console.log("caso 4: ", value)
// )

//*CASO 5  los .then dan undefined
// promesaA.then((value) => console.log(value))
// .then((value) => console.log(value))
// .then((value) => console.log(value))
// .then((value) => console.log(value))
// .then((value) => console.log(value))
// .catch((error) => console.log(error, "soy el catch"));

//*CASO 6
// promesaA.then((value) => console.log(value))
// .catch((error) => console.log(error))

//*CASO 7  da undefined el segundo .then
// promesaA.then(
//     (value) => console.log("Soy el primer .then", value),
//     (error) => console.log("Soy la razon del rechazo", error)
// )
// .then((value) => console.log("Soy el .then encadenado", value))


//*SOLUCION 1
// promesaA.then(
//     (value) => {return "El primer .then"},
//     (error) => console.log("Soy la razon del rechazo", error)
// )
// .then((value) => console.log("Soy el .then encadenado", value))


//*SOLUCION 2
// promesaA.then(
//     (value) => {return value},
//     //(value) => value,
//     (error) => console.log("Soy la razon del rechazo", error)
// )
// .then((value) => console.log("Soy el .then encadenado:", value))


//*CASO 8
// promesaA.then(
//     (value) => { return  "otro valor"},
//     (error) => { return error}
// )
// .then((value) => console.log("soy el .then encadenado, recibo: ", value))


// promesaA.then(
//     (value) => { return  "otro valor" },
//     (error) => { throw error }  //throw es el return de los errores
// )
// .then(
//     (value) => console.log("soy el .then encadenado, recibo: ", value),
//     (error) => console.log("errorHandler ", error)
// )


//*CASO 9
// promesaA.then(
//     (value) => {
//         console.log(1)
//         console.log("Primer .then: ", value)
//     }
// )
// .then(
//     (value) => {
//         console.log(2);
//         throw new Error("esto es un throw error");
//     }
// )
// .then(
//     (value) => {
//         console.log(3);
//         console.log("Tercer .then: ", value);
//     }
// )
// .catch(
//     (error) => console.log("Soy el catch: ", error)
// )


// promesaA.then(
//     (value) => {
//         console.log(1)
//         console.log("Primer .then: ", value)
//     }
// )
// .then(
//     (value) => {
//         console.log(2);
//         return "otro valor";
//     }
// )
// .then(
//     (value) => {
//         console.log(3);
//         console.log("Tercer .then: ", value);
//     }
// )
// .catch(
//     (error) => console.log("Soy el catch: ", error)
// )


//*CASO 10
const promesaB = promesaA.then((value) => {
    return value;
})

const promesaZ = promesaB.then((value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promesa z resuelta con este valor -> " + value)

        }, 1000)
    })
})


promesaZ.then(
    (value) => console.log("tercer then ->", value)
)
.catch((error) => console.log("soy el catch de promesaZ: ", error))