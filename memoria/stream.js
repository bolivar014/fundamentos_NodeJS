/*
    // Importo librerias 
    fs "fileSystem": Permite manipular eventos asociados a inputs tipo file.
    
    stream:
    
    util:
*/
const fs = require('fs');
const { stdout } = require('process');
const stream = require('stream');
const util = require('util');

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

// stream de transformación - Permite Leer y escribir 
const Transform = stream.Transform;

//
function Mayus() {    
    Transform.call(this);
}

// Metodo que indica "Función Mayus recibe todo desde Transform"
util.inherits(Mayus, Transform);

// Función para acceder a la codificación del string
Mayus.prototype._transform = function(chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();  // Se realiza conversión de datos a mayusculas
    this.push(chunkMayus); // Se agrega Datos en mayusculas.
    cb(); // Se ejecuta Callback
}

// Accedemos a la transformación del string
let mayus = new Mayus();

// Procedemos a escribir.
readableStream
    .pipe(mayus) // Obtenemos string
    .pipe(process.stdout); // Escribimos string convertido a mayusculas

