/*---Creando método instanciando el objeto------  */
let vaca = new Object(); // instancio el objeto+
vaca.nombre = "Lola";
vaca.sonido = function () {
  console.log("muuuuuuu");
}; //creo un método para el objeto vaca




/* ---Creando método con la notación literal del objeto------ */
perro = {
  nombre: "Firulais",
  ladrar: function () {
    console.log("guau");
  },
};

/* TESTEO */
console.log("INICIO");

vaca.sonido(); //invoco el método
perro.ladrar(); //invoco el método

console.log("FIN");
