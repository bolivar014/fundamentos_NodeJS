// Requerir modulo http || todo lo necesario para crear un servidor...
const http = require('http');

// Creamos servidor
http.createServer(router).listen(3000);

function router(req, resp) {
    console.log('Nueva peticion');
    console.log('req');
    console.log(req.url);

    switch(req.url) {
        case '/hola':
            let saludo = hola();
            resp.write(saludo);
            resp.end();
        break;
        default:
            resp.write('Error 404 | Not Found');
            resp.end();
        break;
    }

    // resp.writeHead(201, { 'Content-Type': 'text/plain' });

    // // Escribir respuesta al usuario
    // resp.write('hola, ya se utilizar http de NodeJS');

    // // Cerramos la petición
    // resp.end();
}

// Retornamos saludo de prueba
function hola() {
    return "Hola que tal";
}

// El puerto utilizado para escuchar el servidor, es el 3000
console.log("Escuchando http en el puerto 3000");

