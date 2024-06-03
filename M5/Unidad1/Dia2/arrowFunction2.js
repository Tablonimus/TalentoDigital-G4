/*ES5 vs ES6 */
console.log("ES5 vs ES6");

/* ------------------------------- */
function saludar() {
  return console.log("Hola!!");
}

/* Características especiales */
// 3 - Cuando no existen parámetros se debe agregar los paréntesis antes de la flecha obligatoriamente.
const saludarFlecha3 = () => console.log("Hola!!");

/* -------------------------------- */
function generarUsuario(nombre, apellido) {
  return nombre + apellido;
}

/* Características especiales */
//4- Si existen dos o más parámetros, se deben implementar los paréntesis obligatoriamente para encerrar los parámetros.
const generarUsuarioFlecha4 = (nombre, apellido) => nombre + apellido;
// generarUsuarioFlecha4("Juan", "Perez");
