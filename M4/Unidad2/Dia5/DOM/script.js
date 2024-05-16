/* SELECTOR POR ID */
let etiquetaContenedor = document.getElementById("contenedor");
let etiquetaItem1 = document.getElementById("item1");

/* innerHTML => Accedes al contenido interno de la etiqueta, que puede ser otra/s etiqueta/s ó texto */

console.dir(etiquetaContenedor.innerHTML); //antes de alterarlo
etiquetaContenedor.innerHTML = "<h1>Hola Mundo!</h1>";
console.dir(etiquetaContenedor.innerHTML); //despues de alterarlo

/* style => Accesdes a los estilos de la etiqueta */
etiquetaContenedor.style.backgroundColor = "red";
etiquetaContenedor.style.borderRadius = "22px";
etiquetaContenedor.style.padding = "22px";
