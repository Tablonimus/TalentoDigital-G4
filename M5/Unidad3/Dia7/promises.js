const promesaAlgoPasara = (numero) => {
  return new Promise((resolve, reject) => {
    if (numero >= 10) {
      resolve(`La promesa se cumplió con éxito, su numero es: ${numero}`);
    } else {
      reject("Ha ocurrido un problema!");
    }
  });
};

console.log("Inicio");

promesaAlgoPasara(122)
  .then((response) => console.log("Respuesta exitosa=>", response))
  .catch((error) => console.log("Error=> ", error));

console.log("Final");
