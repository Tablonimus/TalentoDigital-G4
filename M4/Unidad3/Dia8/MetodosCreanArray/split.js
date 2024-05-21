/* .split() => El método split nos permite dividir una
cadena de texto string en un arreglo. Se le pasa como argumento el caracter divisor.
Este método retorna un array nuevo.*/

const frase = "Hola mundo! espero que esten bien!";

const fraseArray = frase.split(" ");

console.log(fraseArray);


/* ----------EJEMPLO DIAPOSITIVA ---------------- */
const cliente = 'JuanCarlos;29;jcarlos@gmail.com';

const arregloCliente = cliente.split(';');

console.log(arregloCliente);
