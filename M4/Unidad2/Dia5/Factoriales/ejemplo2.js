let calcularYmostrarResultado = function (num) {
  // valida que el número cumpla las condiciones solicitadas
  if (num < 1 || num > 20) {
    console.log("Número fuera del rango");
    return false; // al retornar false se corta el proceso normal de la función;
  }
  for (let i = 1; i <= num; i++) {
    //iteramos desde 1 al número ingresado;
    let prod = i * num; // por cada iteración multiplicamos el valor de i por el número
    console.log(`${i} x ${num} = ${prod}`); // Mostramos el resultado en pantalla
  }
  for (let i = 1; i <= num; i++) {
    let res = 1;
    for (let j = 1; j <= i; j++) {
      res = res * j;
    }
    console.log("Factorial de " + i + " es: " + res);
  }
};
calcularYmostrarResultado(3);
