// Creamos un buffer - con (X) espacios en memoria
// let buffer = Buffer.alloc(1); // Crear un buffer con (1) espacio en memoria
// let buffer = Buffer.from([1, 2, 5]); // Creamos un buffer y le asignamos los valores a sus espacios en memoria
let buffer = Buffer.from("Hola"); // Creamos un buffer y le asignamos los valores a sus espacios en memoria


// Imprimimos el buffer
// console.log(buffer);
console.log(buffer.toString());

// Creamos un buffer con el Abecedario...
let abc = Buffer.alloc(26);

// Imprimimos el buffer vacio.
console.log(abc);

// Llenamos el buffer
for(let i = 0 ; i < 26 ; i++) {
    abc[i] = i + 97;
}

// Imprimimos el buffer
console.log(abc);
console.log(abc.toString());