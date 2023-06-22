const {videojuegos} = require("./data"); //Common JS
// const gilada = require("./data"); 
const cowsay = require("cowsay"); //las deps instaladas
//se pueden llamar directamente, sin definir cual es la carpeta

const tortuga = 'Donatello';

console.log(tortuga);

videojuegos.map((juego) => {
    console.log(juego);
});

console.log(
    cowsay.say({
        text: "Pensaron que Gama era serio verdad?",
        e: "OO",
        T: "U ",
    })
);