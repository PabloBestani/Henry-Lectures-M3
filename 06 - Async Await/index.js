// function* idMaker() {
//     let count = 0;
//     while (true) {
//         if (count > 3) return count;
//         yield count++;   //*DEVUELVE UN OBJETO
//         //*devuelve {value: 0, done: false}
//     }
// }

// const contar = idMaker();

// console.log(contar());
//*crashea porque se usa next() para esto

// console.log(contar.next());
// console.log(contar.next());
// console.log(contar.next());
// console.log(contar.next());
// console.log(contar.next());
// console.log(contar.next());


// function RTC() {
//     console.log("HOLA");
//     console.log("Mi nombre");
//     console.log("es");
//     console.log("Gama");
//     return;
// }

// RTC();


// function* generadora() {
//     console.log("HOLA");
//     console.log("Mi nombre");
//     yield "Haz una pausa";
//     yield "Espera otro poco";

//     console.log("es");
//     console.log("Gama");
//     return;
// }


// const gen = generadora();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());


//*ASYNC FUNCTION

// const axios = require("axios");

// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve ("Exito coleguillas");
//         }, 2000);
//     }
// )}

// // resolveAfter2Seconds();


// async function asyncCall() {
//     console.log("Espera 2 seg");
//     const result = await resolveAfter2Seconds();
//     console.log(result);

// }

// asyncCall();








// const axios = require("axios");

// function tradicional () {
//     axios("https://rickandmortyapi.com/api/character/1")
//     .then((response) => response.data)
//     .then(data => console.log("Promesa tradicional: ", data.name))
//     .catch((error) => console.log(error.message));
// }

// tradicional();

// async function conAsync () {
//     try {
//         const response1 = (await axios("https://rickandmortyapi.com/api/character/1"))
//         // const {data} = response;
//         .data;
//         const response2 = (await axios("https://rickandmortyapi.com/api/character/2"))
//         // const {data} = response;
//         .data;
//         const response3 = (await axios("https://rickandmortyapi.com/api/character/3"))
//         // const {data} = response;
//         .data;
//         const response4 = (await axios("https://rickandmortyapi.com/api/character/4"))
//         // const {data} = response;
//         .data;

//         console.log("Con Async/Await: ", response1.name,
//         response2.name,
//         response3.name,
//         response4.name);
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// conAsync();


async function saleAsado() {
    const verduleria = await new Promise((resolve) => {
        setTimeout(() => resolve("papas"), 1000);
    })
    
    console.log(verduleria);
    
    const carniceria = await new Promise((resolve) => {
        setTimeout(() => resolve("vacio"), 2000);
    })
    console.log(carniceria);

    const leña = await new Promise((resolve) => {
        setTimeout(() => resolve("leña"), 2000);
    })
    console.log(leña);

    const fernet = await new Promise((resolve) => {
        setTimeout(() => resolve("fernet"), 2000);
    })
    console.log(fernet);
}

saleAsado();