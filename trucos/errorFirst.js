// Petición 
function asincrona(callback) {
    setTimeout(function() {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch(err) {
            callback(e);
        }
    }, 1000);
}

// Ejecutamos Evento
asincrona(function(err, dato) {
    // Verificamos si existe algun error
    if(err) {
        console.error('Se ha generado un error...');
        console.error(err); 
        return false;
    }

    // 
    console.log('Se ha procesado correctamente, mi dato es: ' + dato);
});
