/* SELECTOR POR ID */
/* Seleccionará el elemento por ID que coincida con el valor pasado  - SOLO UNO!!!!! */
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

/* ------------------------------------------------------- */
/* QUERY SELECTOR */
/* Selecciona una etiqueta por id, Ó ETIQUETASSSSS por clase o nombre de etiqueta, se le debe pasar el valor tal cual lo ponemos en css */
