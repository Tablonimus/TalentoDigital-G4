var interna = "Afuera";

(function () {
  var interna = "Variable dentro de la IIFE";
  console.log(interna);
})();

console.log(interna);

/* 
Como se puede observar en el resultado mostrado anteriormente, al intentar mostrar la
variable creada dentro de la función, el resultado será el esperado, es decir, el valor que tiene
asignado, pero al intentar mostrar esa variable fuera de la función, el resultado indicará que
esta variable no se encuentra definida. Si recordamos del tema anterior, esto se debe a que
la variable declarada dentro de una función pasará a tener un scope o ámbito local y no
podrá ser utilizada fuera de este ámbito local. Veamos ahora otro ejemplo más completo:

*/
var lenguaje = "Ruby";

(function () {
  var lenguaje = "JavaScript";
  console.log(lenguaje + " es un lenguaje de programación");
})();
console.log(lenguaje);
