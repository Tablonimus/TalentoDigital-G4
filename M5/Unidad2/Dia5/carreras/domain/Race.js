/* Carrera */
export class Race {
  constructor(name, place, date, registeredDrivers) {
    this.name = name; //=> nombre de la carrera
    this.place = place; //=> lugar
    this.date = date; //=> fecha
    this.registeredDrivers = registeredDrivers; //=>Array de pilotos; asociado c/u a la class Driver
  }

  get properties() {
    console.log(this);
    return this; //=> devuelvo el objeto completo al que se hace referencia
  }

  get allRegisteredDrivers() {
    console.log(this.registeredDrivers);
    return this.registeredDrivers;
  }

  startRace() {
    const driversLength = this.registeredDrivers.length; //Cantidad de pilotos registrados
    const randomNumber = Math.floor(Math.random() * driversLength); //Número aleatorio   entre   para determinar  un ganador

    const winnerDriver = this.registeredDrivers[randomNumber];
    
    console.log(winnerDriver);
    return winnerDriver;
  } //Este método decidirá un ganador de la carrera
}
