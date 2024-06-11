const promesaAlgoPasara = (numero) => {
  return new Promise((resolve, reject) => {
    if (numero >= 10) {
      resolve(`La promesa se cumplió con éxito, su numero es: ${numero}`);
    } else {
      reject("Ha ocurrido un problema!");
    }
  });
};

const algoPasara = async (numero) => {
  const respuestaDeLaPromesa = await promesaAlgoPasara(numero);
  return console.log(respuestaDeLaPromesa);
};

console.log("Inicio");

algoPasara(122);

console.log("Final");
