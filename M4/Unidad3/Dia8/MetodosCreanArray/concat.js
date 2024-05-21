/* concat() => Podemos fusionar los elementos de dos o más arrays dentro de un solo
resultado. */
const verduras = ["Lechuga", "Zanahoria", "Zapallo"];

const frutas = ["Banana", "Frutilla", "Pera"];

const bebidas = ["Chelas", "Vino", "Tequila"];

const listaDeCompras = verduras.concat(frutas, bebidas);

console.log(listaDeCompras); //[ 'Lechuga', 'Zanahoria', 'Zapallo', 'Banana', 'Frutilla', 'Pera' ]

/* ------ EJEMPLO DIAPOSITIVA ----------- */

const autosCompactos = [
  { marca: "Toyota", modelo: "Corolla", combustible: "Gasolina" },
  { marca: "Mazda", modelo: "3", combustible: "Gasolina" },
  { marca: "Honda", modelo: "Civic", combustible: "Gasolina" },
  { marca: "Bmw", modelo: "116d", combustible: "Diesel" },
];
const autosDeportivos = [
  { marca: "Opel", modelo: "Astra OPC", combustible: "Gasolina" },
  { marca: "Renault", modelo: "Megane RS", combustible: "Gasolina" },
  { marca: "Mitsubishi", modelo: "Lancer Evo", combustible: "Gasolina" },
];

const autos = autosCompactos.concat(autosDeportivos);
console.log(autos);
