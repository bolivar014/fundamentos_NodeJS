// 
function otraFuncion() {
    return serompe();
}

// Función se rompe
function serompe() {
    return 3 + z;
}

// 
function seRompeAsincronamente(cb) {
    setTimeout(function () {
        try {
            return 3 + z;
        }catch(error) {
            console.error('Error en la funcion asincrona');
            cb(error);
        }
    });
}

try {
    // Cuando se ejecuta correctamente la función.
    // serompe();
    // otraFuncion();
    seRompeAsincronamente(function(error) {
        console.log(error.message);
    })
} catch (err) {
    // Cuando sucede un error de ejecución
    console.error('Vaya, se ha generado un error interno');
    console.error(err);
    console.error(err.message);
}

// Mensaje...
console.log('esto se encuenta al final...');