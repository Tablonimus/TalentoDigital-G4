/* .shift() => el método .shift() elimina el primer elemento del array */

const arrayPersonas = ["Nicolas", "Celeste", "Estefani", "Javi", "Carlos"];

arrayPersonas.shift();

console.log(arrayPersonas);

/* ---------------- EJEMPLO DIAPOSITIVA --------------- */

const libros = [
  { titulo: "Harry Potter", pag: "300" },
  { titulo: "El principito", pag: "100" },
  { titulo: "De animales a dioses", pag: "350" },
];

libros.shift();

console.log(libros);
