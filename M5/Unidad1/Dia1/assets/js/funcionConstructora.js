/* Creo una función constructora  => un prototipo/molde para mis objetos */
/* SINTAXIS BÁSICA */
/* 
function Persona(nombre) {
  this.nombre = nombre;
}
*/

/* FUNCIÓN CONSTRUCTORA */
function Estudiante(
  nombre,
  apellido,
  calificaciones,
  asistencias,
  estaAprobado
) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.calificaciones = calificaciones;
  this.asistencias = asistencias;
  this.estaAprobado = estaAprobado;
  /*  creo métodos que todas las instancias de Estudiante van a heredar por el simple hecho de ser estudiantes. */
  this.saludar = function () {
    console.log("Hola soy " + this.nombre + " " + this.apellido);
  };

  this.estudiar = function () {
    console.log("hola estoy estudiando.");
  };

  this.cerrarSence = function () {
    let numeroRandom = Math.ceil(Math.random() * 5);
    if (numeroRandom === 2) {
      console.log("Has cerrado sence exitosamente");
    } else {
      console.log("Vuelve a intentar.");
    }
  };

  this.obtenerPromedio = function () {
    const sumaDeCalificaciones = this.calificaciones.reduce(
      (acumulador, valorActual) => acumulador + valorActual,
      0
    ); /* Reduce me suma las calificaciones dentro del array. */

    const cantidadDeCalificaciones = this.calificaciones.length;
    const promedio = sumaDeCalificaciones / cantidadDeCalificaciones;

    console.log(`Promedio de ${this.nombre} => ${promedio}`);
  };
}

const estudiante1 = new Estudiante("Renata", "Rojas", [8, 10, 5, 9], 10, true);
const estudiante2 = new Estudiante(
  "Roimer",
  "Maestre",
  [4, 7, 9, 10],
  12,
  true
);
/* 🚨 Solo la "plantilla" con mayúscula, nunca una instancia. 🚨   */

// estudiante1.saludar();
// estudiante1.estudiar();
// estudiante1.obtenerPromedio();
console.log("----------------------");
console.log(estudiante2);
console.log("----------------------");

estudiante2.saludar();
// estudiante2.estudiar();
// estudiante2.obtenerPromedio();
estudiante2.cerrarSence()

/* ---------------------------------------------------------------- */
// const nuevoCurso = [];

// for (let i = 0; i <= 10; i++) {
//   const nuevoAlumno = new Estudiante(`Nombre${i}`, `Apellido${i}`, l, 0, false);
//   nuevoCurso.push(nuevoAlumno);
// }

/* ---------------------------------------------------------------- */

/* CLASE CONSTRUCTORA => TEMA DE UNIDAD 2 - MÓDULO 5 */
// class Estudiante {
//   constructor(nombre, apellido, calificaciones, asistencias, isApproved) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.calificaciones = calificaciones;
//     this.asistencias = asistencias;
//     this.isApproved = isApproved;
//   }
// }
