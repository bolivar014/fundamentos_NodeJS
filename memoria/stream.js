// Importo libreria fileSystem
const fs = require('fs');
const stream = require('stream');

let data = '';

// Accedo al archivo .txt
let readableStream = fs.createReadStream(__dirname + '/input.txt');

// Codifico a UTF-8
readableStream.setEncoding('UTF8');

// Extraigo los datos
readableStream.on('data', function(chunk) {
    // console.log(chunk);
    // console.log(chunk.toString());
    data += chunk;
});

// Imprimo los datos extraidos después de recuperar
readableStream.on('end', function() {
    console.log(data);
});

process.stdout.write('Hola');