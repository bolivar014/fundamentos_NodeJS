// Función saludar...
function saludar() {
    console.log('Hola mundo');
}

// Exportamos el modulo (función saludar)
// module.exports = saludar; // Exportando sólo un argumento ó una función
module.exports = {
    saludar,
    prop1: 'Hola, como estas?'
}; // Exportando muchos argumentos o funciones