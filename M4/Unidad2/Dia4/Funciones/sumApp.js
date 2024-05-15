/* Este programa se encargará de recolectar dos numeros seleccionados por el usuario y sumarlos */

let eleccion1 = Number(prompt("Seleccione el primer número"));
let eleccion2 = Number(prompt("Seleccione el segundo número"));
let mensaje = prompt("Qué tipo de respuesta desea? amable/enojado");

function suma(numero1, numero2, mensaje) {
  let mensajeFinal = null;
  let resultado = numero1 + numero2;

  if (mensaje === "amable") {
    mensajeFinal = "Vuelva Pronto, te extrañaré!";
  } else if (mensaje === "enojado") {
    mensajeFinal = "Vete de Aquí 🤬!";
  } else {
    mensajeFinal = "Chau!";
  }

  return alert(resultado + " " + mensajeFinal);
}

suma(eleccion1, eleccion2, mensaje);
