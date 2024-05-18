/* 
for (let index = 0; index < array.length; index++) {
    const element = array[index];
} 
*/
/* Programa que recibe un array de peliculas Agotadas y arroja su respectivo mensaje */
console.log("Bienvenido al cine Experticia");
console.log("------------------------------------------------------");

let peliculasAgotadas = ["It 2", "Rambo 3", "Halloween", "Shaft"]; //.length = 4
//   index    =     0      1            2           3      4
//     i      =     ↑

//                           4
for (let i = 0; i < peliculasAgotadas.length; i++) {
  let pelicula = peliculasAgotadas[i];
  console.log(`${pelicula} tiene sus ENTRADAS AGOTADAS!!!`);
}


/* Ejemplo con for of */
// for ( const pelicula of peliculasAgotadas) {
//   console.log(`${pelicula} tiene sus ENTRADAS AGOTADAS!!!`);
// }
