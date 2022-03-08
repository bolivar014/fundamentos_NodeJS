// Evento que se ejecuta antes de finalizar
process.on('beforeExit', () => {
    console.log('El proceso esta proximo a finalizar');
})

// Evento que se ejecuta cuando esta finalizando
process.on('exit', () => {
    console.log('El proceso finalizo');
    setTimeout(() => {
        console.log('esto no se va a ver nunca'); 
    }, 0);
})

setTimeout(() => {
    console.log('esto no se va a ver nunca');
}, 0);

process.on('uncaughtException', (err, origen) => {
    console.error('se nos olvido capturar el error...');
    setTimeout(() => {
        console.log('esto viene desde las excepciones');
    }, 0);
    console.error(err);
})

funcionQueNoExiste();

console.log('esto si el error no se recoje, no sale');