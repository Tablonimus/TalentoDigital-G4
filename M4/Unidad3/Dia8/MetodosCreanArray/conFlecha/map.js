/* El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos. */

const verduras = ["Lechuga", "Zanahoria", "Zapallo"];

const nuevasOfertas = verduras.map((verdura) => {
  let oferta = verdura + " está en oferta! Aprovechela!";
  return oferta;
});

// console.log("ARRAY ORIGINAL =>", verduras);
// console.log("ARRAY MODIFICADO =>", nuevasOfertas);

/* ------------ EJEMPLO DIAPOSITIVA ---------- */

const personas = [
  { nombre: "Juan", edad: 28 },
  { nombre: "Carlos", edad: 17 },
  { nombre: "Karla", edad: 27 },
];

const personasInfoAdicional = personas.map((persona) => {
  if (persona.edad < 18) {
    persona.esMayorDeEdad = false;
  } else {
    persona.esMayorDeEdad = true;
  }
  return persona;
});

console.log("ARRAY ORIGINAL =>", personas);
console.log("ARRAY MODIFICADO =>", personasInfoAdicional);

/* ------------ EJEMPLO DIAPOSITIVA ----------- */
const numeros = [10, 15, 20, 25, 30];

numeros_nuevo = numeros.map((num) => {
  return num * 2;
});

console.log(numeros_nuevo);

/* ------------ EJEMPLO DIAPOSITIVA ----------- */
const productos = [
  { nombre: "Banana", precio: 25 },
  { nombre: "Kiwi", precio: 35 },
  { nombre: "Pera", precio: 45 },
];

const preciosConDescuento = productos.map((producto) => {
  const nuevoPrecio = producto.precio / 2;
  producto.precio = nuevoPrecio;
  producto.estaEnOferta = true;
  return producto;
});

console.log(preciosConDescuento);

/* -------------OTRO EJEMPLO ----------------- */

const nombres = ["lucas", "luis", "carlos"];

const fixNombres = nombres.map((nombre) => {
  let nombreArreglado = nombre.toUpperCase();
  return nombreArreglado;
});

console.log(fixNombres);
