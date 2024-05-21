/* .push() => el método .push() agrega uno o mas elementos al final del array , necesito poner entre sus parámetros los valores que deseo agregar */

const arrayPersonas = ["Nicolas", "Celeste", "Estefani", "Javi", "Carlos"];

arrayPersonas.push("Sebastian");

console.log(arrayPersonas);

/* ---------------EJEMPLO DIAPOSITIVA----------------- */

const autos = [
  { auto: "Peugeot", color: "rojo" },
  { auto: "Mazda", color: "azul" },
  { auto: "BMW", color: "negro" },
];

const autoNuevo = { auto: "Suzuki", color: "verde" };

autos.push(autoNuevo);

console.log(autos);
