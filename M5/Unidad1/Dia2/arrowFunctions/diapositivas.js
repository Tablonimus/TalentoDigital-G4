let saludo = () => console.log("saludos a todos");
saludo(); // el resultado sería → saludos a todos

let potencia = (num) => Math.pow(num, 2);
console.log(potencia(2)); // el resultado sería → 4

let suma = (num1, num2) => num1 + num2;
console.log(suma(4, 5)); // el resultado sería → 9

let resta = (num) => {
  let num2 = 20;
  return num - num2;
};
console.log(resta(4)); // el resultado sería → -16

const usuario = {
  name: "Juan",
  mostrarNOmbre: () => {
    return this.name;
  },
};
console.log(usuario.mostrarNOmbre()); // el resultado sería →undefined;
