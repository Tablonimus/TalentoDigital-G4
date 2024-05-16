/* Un objeto se caracteriza por tener propiedades y métodos (hint:los métodos son funciones) */

let perro = {
  raza: "Labrador",
  color: "Dorado",
  edad: 15,
  amigos: { mejorAmigo: "Scooby", enemigo: "Batman" },
  ladrar: function () {
    console.log("Guau!");
  },
};
perro.ladrar();

// console.log("Mi raza es ", perro.raza);
// console.log("Mi mejor amigo es ", perro.amigos.mejorAmigo);
// console.log("Mi enemigo es ", perro.amigos.enemigo);

/* OBJETOS GLOBALES SEGÚN MI ENTORNO DE EJECUCIÓN */

// console.log(window)//=> Window es el objeto global en el navegador

// console.log(global)//=> Global es el objeto global en Node
