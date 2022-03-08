// Nos permitira obtener el objeto de un procesoHijo Externo
const { exec, spawn } = require('child_process');

// Listar en windows
exec('dir', (err, stdout, sterr) => {
// Listar en linux
// exec('ls -la', (err, stdout, sterr) => {
    // Retornamos error en caso que suceda algun problema en la ejecución
    if(err) {
        console.error(err);
        return false;
    }

    // Retornamos mensaje exitoso
    console.log(stdout);
});

// 
let proceso = spawn('ls', ['-la']);

// 
// console.log(proceso);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function(dato) {
    console.log('¿esta muerto?');
    console.log(process.killed); 
    console.log(dato.toString());
});

proceso.on('exit', function() {
    console.log('el proceso termino');
    console.log(proceso.killed);
})