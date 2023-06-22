const http = require("http");
const fs = require("fs");

// console.log(http);

// *http headers: especificaciones de mi mensaje http
// {
//     'content-length': '123',
//     'content-type': 'text/plain',
//     'connection': 'keep-alive',
//     'host': 'example.com',
//     'accept': '*' }


//*CREO UN SERVER Y LE PIDO UN STRING COMO RESPUESTA
// http.createServer((req, res) => {
    // res.writeHead(200, {'content-type': 'text/plain'});
    // res.end("Hola coleguillas");
// }).listen(3001, "localhost");


//*LE PIDO UN HTML COMO RESPUESTA
// http.createServer((req, res) => {
    // res.writeHead(200, {"content-type": "text/html"});
    // const html = fs.readFileSync(__dirname + "/index.html");
    // res.end(html);
// }).listen(3001, "localhost");


//*LE PIDO UN JSON COMO RESPUESTA, CONVERTIDO EN STRING
http.createServer((req, res) => {
    const {url} = req;
    // console.log(url);


    res.setHeader("Access-Control-Allow-Origin", "*");
    if (url === "/gatito") {
        res.writeHead(200, {"content-type": "application/json"});
        const obj = {nombre: "Bartlomiau", alias: "pompitas"};
        return res.end(JSON.stringify(obj))
    }

    if (url === '/html') {
        res.writeHead(200, {"content-type": "text/html"});
        const html = fs.readFileSync(__dirname + "/index.html");
        return res.end(html);
    }

    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/plain'});
        return res.end("Hola coleguillas");
    }

    if (url === '/characters') {
        res.writeHead(200, {"content-type": "application/json"});
        const characters = [
            {name: "harringui", casa: "griffin"},
            {name: "hermie", casa: "griffin"},
            {name: "ronnie", casa: "griffin"},
            {name: "draco", casa: "slyth"}
        ];
        return res.end(JSON.stringify(characters));
    }

    res.writeHead(400, {"content-type": "text/plain"});
    return res.end("Error en la pagina");
})
.listen(3002, "localhost");