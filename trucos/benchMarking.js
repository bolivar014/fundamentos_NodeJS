// Debugger timer global
console.time('global');
    // Inicializamos cont "suma"
    let suma = 0;

    // Console que valida cuanto tarda la ejecución
    console.time('bucle');

    // Ciclo for para medir tiempo de ejecución 
    for (let i = 0 ; i < 1000000 ; i++) {
        // Aumentamos cont "suma"
        suma += 1;
    }

    // Finalizo tiempo que tarda la ejecución
    console.timeEnd('bucle');

    // ------------------------
    // Inicializamos cont "suma"
    let suma2 = 0;

    // Console que valida cuanto tarda la ejecución
    console.time('bucle2');

    // Ciclo for para medir tiempo de ejecución 
    for (let k = 0 ; k < 10000000000 ; k++) {
        // Aumentamos cont "suma2"
        suma2 += 1;
    }

    // Finalizo tiempo que tarda la ejecución
    console.timeEnd('bucle2');

    // ----------------------------------
    // Petición asincrona
    function asincrona() {
        return new Promise( (resolve) => {
            setTimeout(function() {
                console.log('termina el proceso asincrono');
                resolve();
            });
        });
    }
    
    console.time('asincrono');
    // Generamos logs
    console.log('Inicia proceso asincrono');
    asincrona()
        .then(() => {
            console.timeEnd('asincrono')
        })


// Finalizo tiempo de ejecución global
console.timeEnd('global');

