"use strict";

var _Paciente = require("./Dominio/Paciente.js");
var _Consultorio = require("./Dominio/Consultorio.js");
/* ----------------------------------1---------------------------------------------- */
/* ----------------------------------1---------------------------------------------- */
/* ----------------------------------1---------------------------------------------- */
/* CREAMOS LOS PACIENTES Y CONSULTORIO */
var paciente1 = new _Paciente.Paciente("Lucas", 15, 1561354, "Le duele la mano");
var paciente2 = new _Paciente.Paciente("Carlos", 24, 261256, "Le duele la pierna");
var consultorioSantaIsabel = new _Consultorio.Consultorio("Santa Isabel");

/* AGREGAMOS LOS PACIENTES AL CONSULTORIO A TRAVES DEL SETTER pacientes */
consultorioSantaIsabel.pacientes = paciente1;
consultorioSantaIsabel.pacientes = paciente2;

/* CONSULTAMOS LOS PACIENTES CON EL GETTER pacientes */
console.log(consultorioSantaIsabel.pacientes);

/* CONSULTAMOS LA BÚSQUEDA DOS PACIENTES CON EL MÉTODO .buscarPaciente(); uno exitoso y el otro con error. */
console.log("BUSCADOR DE PACIENTES =>", consultorioSantaIsabel.buscarPaciente("Lucas"));
console.log("BUSCADOR DE PACIENTES =>", consultorioSantaIsabel.buscarPaciente("Roberto"));

/* ----------------------------------2---------------------------------------------- */
/* ----------------------------------2---------------------------------------------- */
/* ----------------------------------2---------------------------------------------- */

var paciente3 = new _Paciente.Paciente("Pepe", 22, 1561354, "Le duele la mano");
var paciente4 = new _Paciente.Paciente("Tulio", 33, 261256, "Le duele la pierna");
var hospitalMayor = new _Consultorio.Consultorio("Hospital Mayor", [paciente3, paciente4]);
console.log(hospitalMayor);

/* ----------------------------------3---------------------------------------------- */
/* ----------------------------------3---------------------------------------------- */
/* ----------------------------------3---------------------------------------------- */

var paciente5 = new _Paciente.Paciente("Pepe", 22, 1561354, "Le duele la mano");
var paciente6 = new _Paciente.Paciente("Tulio", 33, 261256, "Le duele la pierna");
var pacientesNuevos = [];
pacientesNuevos.push(paciente5, paciente6); // pacientesNuevos.push(paciente6);

var hospitalMenor = new _Consultorio.Consultorio("Hospital Menor", pacientesNuevos);
console.log(hospitalMenor);