/* Este programa se encargará de recolectar dos ingredientes seleccionados por el usuario y hacer una torta */
let nombre = prompt(
  "Bienvenido a la app de tortas! Dinos tu nombre para comenzar..."
);
let eleccion1 = prompt("Seleccione el primer ingrediente");
let eleccion2 = prompt("Seleccione el segundo ingrediente");
let envio = prompt("Qué tipo de envío desea? domicilio/retiro");

crearPedido(eleccion1, eleccion2, envio, nombre);

function generarMensajePersonalizado(mensaje, nombre) {
  let mensajePersonalizado = null;

  if (mensaje === "domicilio") {
    mensajePersonalizado =
      "Lo sentimos! " + nombre + " el pedido esta en camnio!";
  } else if (mensaje === "retiro") {
    mensajePersonalizado = "Ven Aquí " + nombre + "🤬! Si te atreves...";
  } else {
    mensajePersonalizado =
      "Por favor " + nombre + " realiza tu pedido nuevamente.";
  }

  return mensajePersonalizado;
}

function crearPedido(ingrediente1, ingrediente2, mensaje, nombre) {
  let mensajeFinal = generarMensajePersonalizado(mensaje, nombre);
  let resultado = ingrediente1 + " con " + ingrediente2;

  return alert(
    "Gracias por tu compra!, tu torta de " +
      resultado +
      " se esta preparando. " +
      mensajeFinal
  );
}

console.log("FIN DE LA APLICACIÓN");
