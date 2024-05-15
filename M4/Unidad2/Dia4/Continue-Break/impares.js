/* ESTE PROGRAMA ITERARÁ HASTA EL NÚMERO 20 MOSTRANDO POR CONSOLA LOS NÚMEROS PARES Y AL FINAL, UN RECUENTO DE NÚMEROS */

let impar = 0;

for (let i = 0; i <= 20; i++) {

  if (i == 10 || i == 8) {
    continue; // se ignora cualquier otro proceso y se continua a la siguiente iteración
  }

  if (i == 19) {
    break; // se rompe el cicloactual
  }

  if (i % 2 == 0) {
    console.log(i);
  } else {
    impar++;
  }
}

console.log("La cantidad de números impares es: " + impar);
