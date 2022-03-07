// Función asincrona
function hola(nombre, miCallback) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1500);
    });
}

function hablar(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log('bla bla bla bla...');
            resolve(nombre);
        }, 1000);
    })
}

function adios(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log('adios ' + nombre);
            resolve();
        }, 1000);
    })
}


// -----------------
console.log('Inicio el proceso...');

// Funciones que se ejecutan
hola('Camilo')
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Termino el proceso...');
    })
    .catch(error => {
        // Cuando sucede algun error en los then anteriores, se redirecciona al catch
        console.log('Se ha generado un error...');
        console.log(error);
    })