/* Demostrar cómo opera el alcance en las funciones, para esto: crear dos variables
con el mismo nombre ubicadas en distintos espacios de código (dentro y fuera de la
función) y mostraremos su valor.  */

let miVariable = 10; // variable global

function miFuncion() {
  let miVariable = 5; // se declara una "nueva" variable local al usar "var";
  console.log(miVariable); // se muestra la variable en la consola
}


console.log(miVariable);
miFuncion(); // se hace el llamado de la función
console.log(miVariable);
