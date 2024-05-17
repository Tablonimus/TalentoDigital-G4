/* ARRAY => Su sintaxis es : definir datos entre [ ] separados por una ,  */

let miPrimerArray = ["Lord of the rings", "Pepe", "Lucas"];
//     index =>          0                   1            2

/* Acceder al array */
//console.log("Todo el array: ", miPrimerArray); //Muestro el array en consola
console.log("1er elem: ", miPrimerArray[0]); //Muestro el primer elemento del array en consola
console.log("2do elem: ", miPrimerArray[1]); //Muestro el segundo elemento del array en consola

/* ----------------------------------------------------------------------------- */
/* Acceder a la longitud del array (¿Cuantos elementos tiene el array?) */
const programa_web = [
  "JavaScript", // posición 0
  "React JS", // posición 1
  "Vue JS", // posición 2
  "Angular JS", // posición 3
  "Node JS", // posición  4
];
//console.log("¿Cuantos elementos tiene el array?", programa_web.length);

/* Acceder a un valor dinamicamente */
let arrayColores = ["Azul", "Amarillo", "Naranja", "Verde", "Celeste"];
let numeroMisteriso = 2;
//console.log(arrayColores[numeroMisteriso]);

/* Acceder al último valor */
let indiceDelUltimoElemento = arrayColores.length - 1;
//console.log(arrayColores[arrayColores.length - 1]); //Alternativa
