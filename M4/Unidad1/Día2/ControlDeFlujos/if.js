/* SINTAXIS BÁSICA 
if (condición a cumplir) {
  <código a ejecutar si la condición se cumple>
}
*/

/* Este programa recibe un número misterioso y nos devuelve una respuesta sólamente si el número es mayor a 5 */
console.log("Inicio");
let numeroMisterioso = 2;

let result = numeroMisterioso > 5;//devuelve true o false

if (result === true) {
  console.log("El número misterioso es mayor a 5");
}

console.log("Fin");
