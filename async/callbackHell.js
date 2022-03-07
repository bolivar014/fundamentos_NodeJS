// Función asincrona
function hola(nombre, miCallback) {
    setTimeout(() => {
        console.log('Hola ' + nombre);
        miCallback(nombre);
    }, 1500);
}

function hablar(callbackHablar) {
    setTimeout(() => {
        console.log('bla bla bla bla...');
        callbackHablar();
    }, 1000);
}

function conversacion(nombre, veces, callbackConversacion) {
    if(veces > 0) {
        hablar(function() {
            conversacion(nombre, --veces, callbackConversacion)
        });
    } else {
        adios(nombre, callbackConversacion);
    }
    
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log('adios ' + nombre);
        otroCallback();
    }, 1000);
}

// --------------------------

// Debugger inicio proceso
console.log('Iniciando proceso...');
hola('camilo', function(nombre) {
    conversacion(nombre, 3, function() {
        console.log('Proceso terminado...');
    });
});


// hola('camilo', function(nombre) {
//     adios(nombre, function() {
//         console.log('Terminamos Proceso...');
//     });
// });

// CallbackHell | Asincrono, depende la ejecución hola, para pasar a adios...
/*
    hola('camilo', function(nombre) {
        hablar(function(){
            hablar(function(){
                hablar(function(){
                    hablar(function(){
                        adios(nombre, function(){
                            console.log('Terminando proceso...');
                        });        
                    });
                });
            }); 
        });
    });
*/

