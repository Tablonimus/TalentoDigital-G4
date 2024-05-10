/* Ejemplo2: Caso NETFLIX: si tienes una suscripción activa y un registro de cuenta, puedes ingresar a ver películas */
/* Valor Truthy o Falsy => https://developer.mozilla.org/es/docs/Glossary/Truthy */
/* !! => se utiliza un doble exclamación para evaluar booleanamente una variable */
let user = "";
let isActive = true;

let canWatchMovies = user && isActive;

console.log("Puedo ver películas? ", !!canWatchMovies);
