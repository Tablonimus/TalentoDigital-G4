/*OPERADOR LÓGICO   && */

/* Ejemplo1: Debe cumplirse una condición para que esta persona pueda manejar,
Debe ser mayor de 18 años y tener licencia de conducir */
console.log("Ejecutando programa de licencias...");
console.log("/-/-/-/-/-/");
let name = "Toretto";
let age = 18;

let hasDriverLicence = true; // true o false
let isGreaterThan18 = age >= 18; // true o false

let canDrive = isGreaterThan18 && hasDriverLicence;

const question = "El humano " + name + " puede manejar?";

console.log(question, canDrive);

console.log("/-/-/-/-/-/");
console.log("Fin del programa");



