// Función asincrona
async function hola(nombre, miCallback) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1500);
    });
}

async function hablar(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log('bla bla bla bla...');
            resolve(nombre);
        }, 1000);
    })
}

async function adios(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log('adios ' + nombre);
            resolve();
        }, 1000);
    })
}


// ------------------
// Constructor inicial
async function main() {
    let nombre = await hola('Camilo');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    // Ejecuta al final
    console.log('debugger final...');
}

// Ejecución inicial
console.log('debugger inicial...');

// Ejecutamos función main() y todas las peticiones dentro de ella
main();