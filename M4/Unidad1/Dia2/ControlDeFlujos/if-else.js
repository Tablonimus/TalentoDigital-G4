/* SINTAXIS BÁSICA 
if (condición a cumplir) {
  <código a ejecutar si la condición se cumple>
} else {
    <código a ejecutar si la condición NO se cumple>
}
*/

/* Este programa recibe un número misterioso,si el número es mayor a 5 nos devolverá una respuesta, caso contrario nos devolverá un error */
console.log("Inicio");
let numeroMisterioso = 1256;

if (numeroMisterioso > 5) {
  console.log("El número misterioso es mayor a 5");
} else {
  console.error("Ha ocurrido un error inesperado, corre!!!!");
}

console.log("Fin");
