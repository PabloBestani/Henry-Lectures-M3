// const http = require("http");

// // http headers (especificaciones de mi mensaje http)
// // { 'content-length': '123',
// //   'content-type': 'text/plain',
// //   'connection': 'keep-alive',
// //   'host': 'example.com',
// //   'accept': '*' }

// http
//   .createServer((req, res) => {
//     const {url} = req;

//     res.setHeader("Access-Control-Allow-Origin", "*");

//     if (url === "/gatito") {
//       res.writeHead(200, {"content-type": "application/json"});
//       const obj = {nombre: "Bartolomiau", alias: "pompitas"};
//       return res.end(JSON.stringify(obj));
//     }

//     if (url === "/tortugas") {
//       res.writeHead(200, {"content-type": "text/html"});
//       const html = fs.readFileSync(__dirname + "/index.html");
//       return res.end(html);
//     }

// if (url === "/") {
//   res.writeHead(200, {"content-type": "text/plain"});
//   return res.end("Hola coleguillas");
// }

//     if (url === "/characters") {
//       res.writeHead(200, {"content-type": "application/json"});
//       const characters = [
//         {id: 1, name: "Harry Potter", house: "Griffindor"},
//         {id: 2, name: "Ron Weasley", house: "Griffindor"},
//         {id: 3, name: "Draco Malfoy", house: "Slytherin"},
//         {id: 4, name: "Hermione Granger", house: "Griffindor"},
//       ];
//       return res.end(JSON.stringify(characters));
//     }

//     res.writeHead(400, {"content-type": "text/plain"});
//     return res.end("Error en la pagina");
//   })
//   .listen(3001);

const express = require("express");
const server = express();
const morgan = require("morgan");
const mainRouter = require("./router/mainRouter");

server.listen(3001, () => {
  console.log("El servidor esta levantado en el puerto 3001");
});

//! MIDDLEWARE  ----> ()={}

// server.use((req, res, next) => {
//   console.log("Estoy pasando por el middleware");
//   next();
// });

// server.use(cors)
server.use(morgan("dev"));
server.use(express.json());
server.use(mainRouter);
