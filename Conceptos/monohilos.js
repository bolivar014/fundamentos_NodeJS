// Imprimimos 
console.log('Hola mundo');

// Iteramos ciclo infinito - El cual sólo se ejecuta cuando termina resto de ejecuciones.
let i = 0;
setInterval(() => {
    console.log('sigo activo')
    console.log(i);
    i++;

    // if(i === 5) {
    //     console.log('error');
    //     var a = 3 + z;
    // }
}, 1000);

// Imprimimos segundo mensaje
console.log('segundo evento');