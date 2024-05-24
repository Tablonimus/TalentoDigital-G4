/* ESTE MÉTODO NO MODIFICA EL ARRAY, TAMPOCO CREA UNA COPIA */
/*  forEach()=> Podemos recorrer cada elemento de un array y realizar alguna acción con
respecto a cada uno de éstos
 */

const arrayPersonas = ["Nicolas", "Celeste", "Estefani", "Javi", "Carlos"];

arrayPersonas.forEach((persona) => {
  return console.log("Hola " + persona + "!");
});

/* -----EJEMPLO DIAPOSITIVA ------- */

const clientes = [
  { nombre: "Juan", edad: 28 },
  { nombre: "Carlos", edad: 22 },
  { nombre: "Karla", edad: 27 },
];

clientes.forEach(function (cliente) {
  console.log(cliente.nombre);
});

/*
FUNCION CALLBACK EJEMPLO
 let num = 5;

function suma(numero) {
  return numero + numero;
}
function resta(numero) {
  return numero - numero;
}
function multiplicacion(numero) {
  return numero - numero;
}

function operacionMatematica(numero, funcionAritmetica) {
  funcionAritmetica(numero);
}

operacionMatematica(num, suma);
operacionMatematica(num, resta);
operacionMatematica(num, multiplicacion); 
*/
