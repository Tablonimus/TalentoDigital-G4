//Declaración de un objeto: Primero instanciamos un objeto vacío y luego le añadimos propiedades.
const rectangulo = new Object();
rectangulo.ancho = 10;
rectangulo.largo = 5;
console.log("MI RECTANGULO => ", rectangulo);

//Declaración de un objeto: notación literal de un objeto.
const cuadrado = {
  largo: 10,
  ancho: 10,
};
cuadrado.alto = 7; // Dot notation => notación de punto
cuadrado["ancho"] = 7; //Bracket notation => notación de corchetes
console.log(cuadrado)

/* CÓMO CREAR UN OBJETO VACÍO */
const objetoInstanciaNuevo = new Object();
const objetoLiteralNuevo = {};
console.log(objetoInstanciaNuevo)
console.log(objetoLiteralNuevo)
