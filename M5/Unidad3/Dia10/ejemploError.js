let date = new Date();

let dateString =
  date.getFullYear() +
  "-" +
  ("0" + (date.getMonth() + 1)).slice(-2) +
  "-" +
  ("0" + date.getDate()).slice(-2) +
  "T" +
  ("0" + date.getHours()).slice(-2) +
  ":" +
  ("0" + date.getMinutes()).slice(-2) +
  ":" +
  ("0" + date.getSeconds()).slice(-2);

// /* Errores personalizados */
/* Creo una nueva instancia de la clase Error.
TIP=> la palabra reservada throw es el "return" del error */
function getValue(number) {
  if (number >= 10) throw new Error("Ups! El número ingresado a roto la PC");
  if (number === 1)
    throw new Error("Ups! El número NO PUEDE SER 1 => " + dateString);

  return console.log("numero menor a 10");
}

// getValue(1);

/* -------Si estoy en un bloque try/catch, cualquier error que ocurra en en el try, será captado por catch.-------------- */
const showError = (number) => {
  try {
    if (number >= 10) throw new Error("El número ingresado a roto la PC");
    if (number === 1) throw new Error("El número NO PUEDE SER 1" + dateString);

    return console.log("numero menor a 10");
  } catch (error) {
    // console.log(error);
    // console.trace(error) //=>muestra el error marcando una guía(trace) de donde ha ocurrido.
    console.log(
      "Esto esta en el catch!!!=>",
      error.message + " en el día ",
      dateString
    );
  }
};

showError(15);
