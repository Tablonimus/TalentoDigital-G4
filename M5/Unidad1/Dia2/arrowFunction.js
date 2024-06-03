/*ES5 vs ES6 */
console.log("ES5 vs ES6");
/* ------------------------------- */

/* Expresión de una función */
function miFuncionSuma(num) {
  return num + num;
}

/* Función flecha */
const miFuncionFlechaSuma = (num) => {
  return num + num;
};
// Características especiales
// 1-Si tiene un parámetro, no es necesario poner paréntesis.
const miFuncionFlechaSuma1 = (num) => {
  return num + num;
};
// 2-Se puede omitir el return y las llaves {} si es una sola línea de programación después de la flecha.
//Esto se llama return implícito.
const miFuncionFlechaSuma2 = (num) => num + num;
