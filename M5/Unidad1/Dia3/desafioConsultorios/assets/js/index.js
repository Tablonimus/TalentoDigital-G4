import { Paciente } from "./Dominio/Paciente.js";
import { Consultorio } from "./Dominio/Consultorio.js";

/* ----------------------------------1---------------------------------------------- */
/* ----------------------------------1---------------------------------------------- */
/* ----------------------------------1---------------------------------------------- */
/* CREAMOS LOS PACIENTES Y CONSULTORIO */
const paciente1 = new Paciente("Lucas", 15, 1561354, "Le duele la mano");
const paciente2 = new Paciente("Carlos", 24, 261256, "Le duele la pierna");

const consultorioSantaIsabel = new Consultorio("Santa Isabel");

/* AGREGAMOS LOS PACIENTES AL CONSULTORIO A TRAVES DEL SETTER pacientes */
consultorioSantaIsabel.pacientes = paciente1;
consultorioSantaIsabel.pacientes = paciente2;

/* CONSULTAMOS LOS PACIENTES CON EL GETTER pacientes */
console.log(consultorioSantaIsabel.pacientes);

/* CONSULTAMOS LA BÚSQUEDA DOS PACIENTES CON EL MÉTODO .buscarPaciente(); uno exitoso y el otro con error. */
console.log(
  "BUSCADOR DE PACIENTES =>",
  consultorioSantaIsabel.buscarPaciente("Lucas")
);

console.log(
  "BUSCADOR DE PACIENTES =>",
  consultorioSantaIsabel.buscarPaciente("Roberto")
);

/* ----------------------------------2---------------------------------------------- */
/* ----------------------------------2---------------------------------------------- */
/* ----------------------------------2---------------------------------------------- */

const paciente3 = new Paciente("Pepe", 22, 1561354, "Le duele la mano");
const paciente4 = new Paciente("Tulio", 33, 261256, "Le duele la pierna");

const hospitalMayor = new Consultorio("Hospital Mayor", [paciente3, paciente4]);

console.log(hospitalMayor);

/* ----------------------------------3---------------------------------------------- */
/* ----------------------------------3---------------------------------------------- */
/* ----------------------------------3---------------------------------------------- */

const paciente5 = new Paciente("Pepe", 22, 1561354, "Le duele la mano");
const paciente6 = new Paciente("Tulio", 33, 261256, "Le duele la pierna");

const pacientesNuevos = [];

pacientesNuevos.push(paciente5, paciente6); // pacientesNuevos.push(paciente6);

const hospitalMenor = new Consultorio("Hospital Menor", pacientesNuevos);

console.log(hospitalMenor);
