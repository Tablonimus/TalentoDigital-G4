/* Vehículo => Vehículo es una clase padre */
class Vehicle {
  constructor(color, brand) {
    this._color = color;
    this._brand = brand;
  }

  get color() {
    console.log(this._color);
    return this._color;
    /* El getter se encargará de devolver el color de auto que queremos mostrar al exterior*/
  }

  set color(newColor) {
    if (
      newColor === "Rojo" ||
      newColor === "Amarillo" ||
      newColor === "Negro" ||
      newColor === "Azul" ||
      newColor === "Blanco"
    ) {
      return (this._color = newColor);
    }
    return console.log("Color incorrecto, debe ser Rojo, Amarillo o Negro");
  }
}

/* Car => extenderá de la clase vehículos */

export class Car extends Vehicle {
  constructor(color, brand, maxSpeedKm, transmission) {
    super(color, brand);
    this.maxSpeedKm = maxSpeedKm;
    this.transmission = transmission;
  }
  accelerate() {
    console.log("Aumentando la velocidad...");
  }
  stop() {
    console.log("Frenando...");
  }
}

/* Motos */
