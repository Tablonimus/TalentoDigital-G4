/* En pocas palabras, un callback (llamada de vuelta) no es más que una función que se pasa como argumento de otra función, y que será invocada para completar algún tipo de acción.  */

function sumar(num1, num2) {
  return num1 + num2; //8
}

function restar(num1, num2) {
  return num1 - num2;
}

function operacionMatematica(num1, num2, operacion) {
  const resultado = operacion(num1, num2); //       sumar(5,3)
  console.log(resultado);
  return resultado;
}

operacionMatematica(5, 3, sumar);
