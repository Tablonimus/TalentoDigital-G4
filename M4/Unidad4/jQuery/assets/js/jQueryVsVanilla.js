/* Manejo del DOM con JS VANILLA */

// let text = document.getElementById("texto"); //Selector => solo por id

// text.addEventListener("click", function () {
//  console.log("click sobre el texto");
// });

/* CON JQUERY */

let text = $("#texto"); //Selector => parecido a CSS, va con #id .clase ó etiqueta

text.click(function () {
  console.log("click sobre el texto");
});
