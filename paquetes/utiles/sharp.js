// Importamos libreria
const sharp = require('sharp');

sharp('imagen.jpg')
    .resize(80) // Redimencionamos
    .toFile('resized.png');