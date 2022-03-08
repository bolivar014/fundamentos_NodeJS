// Importamos libreria BCRYPT
const bcrypt = require('bcrypt');

// String de contraseña a cifrar
const password = '123456Segura!!*';

// Utilizamos la libreria para cifrar la password y el 5 equivale las rondas de cifrado
bcrypt.hash(password, 5, function(err, hash) {
    console.log(hash);

    // Compara la contraseña con el hash cifrado si coinciden
    bcrypt.compare(password, hash, function(err, resp) {
        // console.log(err);
        console.log(resp);
    });
});