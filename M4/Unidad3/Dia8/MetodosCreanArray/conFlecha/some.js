/* some()=> Nos permite verificar si algún objeto o elemento dentro de un array cumple
con alguna condición que nosotros queramos verificar, es decir, revisar si un arreglo contiene o no un valor. */

const autos = [
  { marca: "Toyota", modelo: "Corolla", combustible: "Gasolina" },
  { marca: "Mazda", modelo: "3", combustible: "Gasolina" },
  { marca: "Honda", modelo: "Civic", combustible: "Gasolina" },
  { marca: "Bmw", modelo: "116d", combustible: "Diesel" },
];

const algunDiesel = autos.some(function (auto) {
  return auto.combustible == "Diesel";
});

console.log(algunDiesel);
