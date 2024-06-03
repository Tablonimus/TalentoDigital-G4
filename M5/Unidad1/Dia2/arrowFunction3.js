/* --------FUNCIONES ANÓNIMAS------- */
/* ejemplos de donde encontrarlas ("en callbacks") */

// function () {console.log("Anonima")}

// ()=> console.log("Anonima")

let miBoton = document.getElementById("button1");


/* ejemplo en ES5 */
// miBoton.addEventListener("click", function () {console.log("Anonima")})

/* ejemplo en ES6 */
miBoton.addEventListener("click", () => console.log("Anonima"));
