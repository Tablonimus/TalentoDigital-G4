let num1 = Number(prompt("Ingrese un número a sumar")); //=> el prompt devuelve un string, por eso debo convertirlo a número.

let num2 = Number(prompt("Ingrese otro número a sumar"));

let totalSuma = num1 + num2;

let respuesta =
  "La suma de " + num1 + " + " + num2 + " da por resultado " + totalSuma;

alert(respuesta);
