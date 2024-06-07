/* Piloto */
export class Driver {
  constructor(name, lastName, number, vehicle) {
    this.name = name; //=> datos del piloto
    this.lastName = lastName; //=> datos del piloto
    this.number = number; //=> número de carrera del piloto
    this.vehicle = vehicle; //=> asociado a un objeto descendiente de Vehicle
  }

  get properties() {
    console.log(this);
    return this; //=> devuelvo el objeto completo al que se hace referencia
  }
}
