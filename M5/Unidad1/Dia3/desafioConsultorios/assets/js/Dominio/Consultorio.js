//En consultorio se agregan getters y setters de la manera mas limpia posible
export class Consultorio {
    constructor(nombre, pacientes) {
      this._nombre = nombre;
      this._pacientes = pacientes || []; //=> si no llegan pacientes en el constructor, dejo un valor por default => [] el array
    }
  
    get nombre() {
      return this._nombre;
    }
  
    set nombre(nuevoNombre) {
      this._nombre = nuevoNombre;
    }
  
    get pacientes() {
      return this._pacientes;
    }
  
    set pacientes(nuevoPaciente) {
      this._pacientes.push(nuevoPaciente);
    }
  
    buscarPaciente(nombrePaciente) {
      let pacienteEncontrado = this._pacientes.find(
        (paciente) => paciente.nombre === nombrePaciente
      );
  
      return pacienteEncontrado || "No se encontraron registros del paciente."; //retorna el objeto paciente
    }
  }