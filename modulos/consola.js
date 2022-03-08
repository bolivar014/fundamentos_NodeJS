// Consola de log
console.log('algo');

// Consola de información
console.info('Algo 2');

// Algunas consolas obtienen los errores...
console.error('algo 3');

// Consola de Alerta
console.warn('algo 4');

var tabla = [
    {
        a: 1,
        b: 'Z'
    }, {
        a: 2,
        b: 'Otra'
    }
];

// Imprime tabla
console.table(tabla)

// imprime en grupo
console.log('Conversacion');
// Group - Conversación
console.group('conversacion');
    console.log('hola');
    console.group('bla');
        console.log('bla bla bla...');
        console.log('bla bla bla...');
        console.log('bla bla bla...');
    console.groupEnd('bla');
    console.log('adios...');
console.groupEnd('conversacion');
console.log('otra cosa de otra funcion');


// Contador de logs.
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
// Evento para resetear...
console.countReset('veces');
// 
console.count('veces');