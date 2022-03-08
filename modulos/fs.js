// Importo FS | nativo de NodeJS
const fs = require('fs');

// Evento para leer archivo
    // Función para leer lo que hay dentro del archivo...
    function leer(ruta, callback) {
        fs.readFile(ruta, (err, data) => {
            console.log(data.toString());
        });
    }

    // Ejecutamos archivo local
    leer(__dirname + '/archivo.txt', console.log);

// -----------------

// Evento para Escribir archivo
    function escribir(ruta, contenido, cb) {
        fs.writeFile(ruta, contenido, function(err) {
            if(err) {
                console.log('no se ha podido escribir: ' + err);
            } else {
                console.log('se ha escrito correctamente');
            }
        })
    }

    // Evento para escribir
    escribir(__dirname + '/archivo1.txt', 'soy un archivo nuevo', console.log);

// -------------------

// Evento para eliminación de archivos.
function borrar(ruta, callback) {
    fs.unlink(ruta, callback);
}

// Evento para eliminar archivo
borrar(__dirname + '/archivo1.txt', console.log);
    