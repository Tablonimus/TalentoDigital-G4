/* 
Es muy frecuente cuando trabajamos con objetos, que un método deba modificar o
utilizar uno de los estados o atributos de un objeto, para lograr esto tendremos que
utilizar la instrucción this.
Si no especificamos con this que nombre es una propiedad, dentro del objeto buscará una variable llamada nombre. Por consiguiente, para referirnos a una propiedad del objeto, tenemos que utilizar this.
*/

let persona = new Object();
persona.nombre = "Camila";
persona.edad = 24;

persona.saludar = function () {
  console.log("Hola soy " + this.nombre);
};

persona.decirEdad = function () {
  console.log("Mi edad es " + this.edad);
};

persona.darInfoCompleta = function () {
  console.log(`Mi edad es ${this.edad} y soy ${this.nombre}`);
};

persona.saludar();
persona.decirEdad();
persona.darInfoCompleta();
