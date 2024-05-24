/* filter() => filtra los elementos que cumplan con la condición especificada y los devuelve en un nuevo array */

const numerosAleatorios = [
  2, 4, 8, 6, 5, 89, 53, 8, 153, 89, 153, 86, 123, 746, 186, 18, 186, 53, 4863,
  7483,
];

const numerosPares = numerosAleatorios.filter((numero) => {
  return numero % 2 === 0;
});

const numerosImpares = numerosAleatorios.filter((numero) => numero % 2 !== 0);

// console.log("Pares", numerosPares);
// console.log("Impares", numerosImpares);

/* -----EJEMPLO DE DIAPOSITIVA 1 ------------- */

const clientes = [
  { nombre: "Juan", edad: 28 },
  { nombre: "Sebastian", edad: 57 },
  { nombre: "Julian", edad: 17 },
  { nombre: "Carlos", edad: 17 },
  { nombre: "Karla", edad: 27 },
];

const adultos = clientes.filter((cliente) => {
  return cliente.edad >= 18;
});

// console.log(adultos);

/* ---------- EJEMPLO DE DIAPOSITIVA 2 ------------- */

const experiencias = [
  {
    titulo: "Practica",
    anios: 1,
  },
  {
    titulo: "Programador Junior",
    anios: 2,
  },
  {
    titulo: "Programador Senior",
    anios: 4,
  },
  {
    titulo: "Jefe de proyecto",
    anios: 5,
  },
];

const muchosAniosDeExperiencia = experiencias.filter((experiencia) => {
  return experiencia.anios > 2;
});

console.log(muchosAniosDeExperiencia);

/* COMO ME DOY CUENTA SI FILTER ENCONTRÓ ALGO? con .length , si es mayor o nó a 0 */


let numeros = [1, 2, 3, 4, 5, 2, 6, 7, 8, 9, 2];
const numeroElegido = 2

const filtrado = numeros.filter((num) => {
  return num === numeroElegido;
});

console.log(filtrado); // []  ? [...]
console.log(filtrado.length); // 0  o >0

if (filtrado.length > 0) {
  console.log("Se encontraron coincidencias");
} else {
  console.log("No hay conincidencias");
}
