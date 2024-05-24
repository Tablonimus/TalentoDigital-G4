/* find() => Nos permite obtener un elemento que cumpla alguna condición que especifiquemos. 
Funciona de forma muy similar al método filter.
Si encuentra el elemento, devuelve el elemento.=>TRUTHY
Si no encuentra el elemento, devuelve undefined.=>FALSY
 */

const numerosAleatorios = [
  1, 456, 123, 86, 4, 186, 3, 0, 12, 863, 783, 48, 153, 5,
];

const miNumeroFavorito = 12;

const numeroEncontrado = numerosAleatorios.find((numero) => {
  return numero.toString() === miNumeroFavorito.toString();
});

if (numeroEncontrado) {
  console.log("Felicidades has ganado la loteria");
} else {
  console.log("Lo sentimos, tu numero no fue seleccionado");
}

/* ------EJEMPLO LOGIN------------------ */

const users = [
  { userName: "admin", pass: "123asd" },
  { userName: "julepe", pass: "123asd" },
];

const inputUser = "admin";
const inputPassword = "123asd";

const loggedUser = users.find((user) => {
  return user.userName === inputUser && user.pass === inputPassword;
});

console.log("usuario logueado?=>", loggedUser);

/* -------EJEMPLO DIAPOSITIVA--------- */

const productos = [
  { nombre: "coca-cola", precio: 990 },
  { nombre: "papas fritas", precio: 590 },
  { nombre: "ramitas", precio: 290 },
  { nombre: "kapo", precio: 190 },
];

const productoSolicitado = productos.find(function (producto) {
  return producto.precio == 290;
});

console.log(productoSolicitado);
