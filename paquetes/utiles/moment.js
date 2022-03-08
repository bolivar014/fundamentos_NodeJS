// Importo libreria moment
const moment = require('moment');

// Variable con fecha actual
let ahora = moment();

// Formato por defecto
console.log(ahora.toString());

// Formato (YYYY/MM/DD - HH:mm)
console.log(ahora.format('YYYY/MM/DD - HH:mm'));

