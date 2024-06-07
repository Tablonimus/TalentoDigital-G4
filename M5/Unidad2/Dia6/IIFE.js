/* 
IIFE => FUNCIONES AUTOINVOCABLES=> se ejecutan automaticamente al momento de ser leidas.
Sintaxis básica:

es5: (function(){})()

es6: (()=>{})()
*/

/* IIFE ES5 =>  */
(function () {
  let saludo = "Hola ES5";
  console.log(saludo);
})();

/* IIFE ES6 =>  */
(() => {
  let saludo = "Hola ES6";
  console.log(saludo);
})();



