/* .unshift() => el método .unshift() agrega uno o mas elementos al principio del array, necesito poner entre sus parámetros los valores que deseo agregar */

const arrayPersonas = ["Nicolas", "Celeste", "Estefani", "Javi", "Carlos"];

arrayPersonas.unshift("Sebastian");

console.log(arrayPersonas);

/* -------------------- EJEMPLO -------------------- */
const libros = [
  { titulo: "El principito", pag: "100" },
  { titulo: "De animales a dioses", pag: "350" },
];

const libroNuevo = { titulo: "Harry Potter", pag: "300" };

libros.unshift(libroNuevo);

console.log(libros);
