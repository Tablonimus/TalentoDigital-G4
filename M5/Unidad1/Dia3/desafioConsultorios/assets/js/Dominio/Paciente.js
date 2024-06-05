//En paciente se agregan getters y setters SIN SEGUIR LAS BUENAS PRÁCTICAS
export class Paciente {
  constructor(nombre, edad, rut, diagnostico) {
    this.nombreProtegido = nombre;
    this.edadProtegida = edad;
    this.rutProtegido = rut;
    this.diagnosticoProtegido = diagnostico;
  }
  /* GETTERS */
  get nombre() {
    return this.nombreProtegido;
  }
  get edad() {
    return this.edadProtegida;
  }
  get rut() {
    return this.rutProtegido;
  }
  get diagnostico() {
    return this.diagnosticoProtegido;
  }
  /* ¡SETTERS! */
  set setNombre(nuevoNombre) {
    this.nombreProtegido = nuevoNombre;
  }
  set setEdad(nuevaEdad) {
    this.edadProtegida = nuevaEdad;
  }
  set setRut(nuevoRut) {
    this.rutProtegido = nuevoRut;
  }
  set setDiagnostico(nuevoDiagnostico) {
    this.diagnosticoProtegido = nuevoDiagnostico;
  }
}


