/* Selecciono las etiquetas que voy a manipular */
const formTag = document.getElementById("formulario");
const animalInput = document.querySelector("#animalInput");

formTag.addEventListener("submit", function (event) {
  event.preventDefault(); /* ELIMINO EL COMPORTAMIENTO POR DEFAULT DEL FORMULARIO */

  let selectedAnimal = animalInput.value;
  validar(selectedAnimal);
});

function validar(text) {
  const patron1 = /gato/i; // las coincidencias (valor Truthy) ó null (Valor falsy)
  const patron2 = /perro/i;
  const patron3 = /canario/i;

  if (text.match(patron1) || text.match(patron2) || text.match(patron3)) {
    alert("Palabra ingresada permitida");
  } else {
    alert("La palabra ingresada NO es permitida");
  }
}
