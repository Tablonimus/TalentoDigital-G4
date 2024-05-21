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
