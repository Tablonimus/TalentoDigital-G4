/* DIFERENCIAS DE SINTAXIS */

function esPar(numero) {
  if (numero % 2 === 0) {
    return "es par";
  } else {
    return "error";
  }
}


const esParAnonima = function (numero) {
  if (numero % 2 === 0) {
    return "es par";
  } else {
    return "error";
  }
};

const esParFlecha = (numero) => {
  if (numero % 2 === 0) {
    return "es par";
  } else {
    return "error";
  }
};
