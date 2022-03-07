// Función asincrona
function hola(nombre, miCallback) {
    setTimeout(() => {
        console.log('Hola ' + nombre);
        miCallback(nombre);
    }, 1500);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log('adios ' + nombre);
        otroCallback();
    }, 1000);
}

// Debugger inicio proceso
console.log('Iniciando proceso...');

// Callback | Asincrono, depende la ejecución hola, para pasar a adios...
hola('camilo', function(nombre) {
    adios(nombre, function(){
        console.log('Terminando proceso...');
    });
    // console.log('Terminando proceso');
});

