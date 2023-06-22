const axios = require("axios");

//*PROMISES PRIMER EJEMPLO

// const request = fetch(`https://rickandmortyapi.com/api/character/1`)
// .then(response => console.log(response.json()));

// // console.log(request);

// const promesa = new Promise((resolve, reject) => {
//     if (23 === 23) {
//         resolve(5);
//     } else {
//         reject("Aaaah tristeza");
//     }
// })

// // promesa.then(
// //     (resolve) => {
// //         console.log(resolve);
// //     },
// //     (reject) => {
// //         console.log(reject);
// //     }
// // );

// //*el metodo .then DEVUELVE OTRA PROMESA!!!!!!
// promesa
//     .then((resolve) => resolve + 5) //{<fulfilled>: 10}
//     .then((resolve) => resolve + 5) //{<fulfilled>: 15}

//     .then() //{<fulfilled>: 15}
//     .then() //{<fulfilled>: 15}
//     .then() //{<fulfilled>: 15}

//     .then((resolve) => resolve + 5) //{<fulfilled>: 20}
//     .then((resolve) => resolve + 5); //{<fulfilled>: 25}

// console.log(resolve);




//*SEGUNDO EJEMPLO

const getCharacters = function() {
    fetch(`https://rickandmortyapis.com/api/character/1`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.log("aqui esta el error coleguillas"));
};

getCharacters();
