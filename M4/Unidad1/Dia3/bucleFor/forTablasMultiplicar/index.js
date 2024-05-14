let numeroMultiplicador = 7;
let limite = 10;

document.write("Se imprimirá la tabla del " + numeroMultiplicador + "<br>");

for (let i = 0; i <= limite; i++) {
    
  /* Se debe multiplicar el numeroM. del 0 al 10 y mostrar los resultados en consola */
  let mensaje = numeroMultiplicador + "x" + i + " = " + numeroMultiplicador * i;

  document.write(mensaje + "<br>");
}
