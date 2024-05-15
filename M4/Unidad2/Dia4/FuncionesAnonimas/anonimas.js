/* Funciones anónimas => Son funciones que no llevan nombre en su sintaxis; sino que el nombre
se le otorga mediante la variable que la almacena (Si es que alguna variable la almacena)
*/

/* Solicitar al usuario que ingrese dos números enteros, y dentro de una función
anónima se realice la división de ambos números, retornando y mostrando, en
el mismo llamado de la función, el resultado como una variable. Para ello,
sigamos los pasos:
 */

//ALERGIA
//ALEGRIA

let num1 = prompt("Ingrese el primer número: ");
let num2 = prompt("Ingrese el segundo número: ");

let divide = function (a, b) {
  let resultado = parseInt(a) / parseInt(b);
  return resultado;
};

alert("Resultado de la división: " + divide(num1, num2));
