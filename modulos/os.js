// Importo modulos del SO.
const os = require('os');

// Ver arquitectura de maquina
console.log(os.arch());

// Obtenemos la información de la maquina
console.log(os.platform());

// Información de la CPU
console.log(os.cpus());

// Errores del sistema operativo.
console.log(os.constants);

// Obtener memoria libre en bytes 
console.log(os.freemem());

const SIZE = 1024;

function kb(bytes) {
    return bytes / SIZE;
}

function mb(bytes) {
    return kb(bytes) / SIZE;
}

function gb(bytes) {
    return mb(bytes) / SIZE;
}

// Obtener espacio en memoria KB
console.log(kb(os.freemem()));

// Obtener espacio en memoria MB
console.log(mb(os.freemem()));

// Obtener espacio en memoria GB
console.log(gb(os.freemem()));

// Obtener espacio en memoria total
console.log(gb(os.totalmem()));

// 
console.log(os.homedir());

// 
console.log(os.tmpdir());

// Obtener a la información del servidor
console.log(os.hostname());

// Accediendo a la información de las tarjetas
console.log(os.networkInterfaces());
