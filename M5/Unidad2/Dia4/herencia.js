/* HERENCIA=> existe una clase superior o padre denominada “vehículo”, 
y de ella dependen otras clases
hijas que pueden heredar los atributos y métodos de la clase padre. */

class Vehiculo {
  constructor(marca, color, matricula) {
    this.marca = marca;
    this.color = color;
    this.matricula = matricula;
  }

  obtenerMarca() {
    console.log(`Marca del Vehículo: ${this.marca}`);
    return this.marca;
  }
}

/* Para hacer una clase derivada, debo utilizar la palabra reservada "extends" seguida del nombre de la clase Padre. */

class Coche extends Vehiculo {
  constructor(marca, color, matricula, puertas) {
    super(marca, color, matricula); //Pasará estas propiedades a su clase padre.
    this.puertas = puertas;
  }

  obtenerCantidadDePuertas() {
    console.log(`El coche tiene ${this.puertas} puertas`);
    return this.puertas;
  }
}

class Moto extends Vehiculo {
  constructor(marca, color, matricula, colorDeCasco) {
    super(marca, color, matricula); //Pasará estas propiedades a su clase padre.
    this.colorDeCasco = colorDeCasco;
  }
  obtenerColorDeCasco() {
    console.log(`La moto tiene ${this.colorDeCasco} su casco.`);
  }
}

class Bus extends Vehiculo {
  //la clase    bus es hija de vehículo
}

/* -------------------------- */

const miCoche = new Coche("Ford", "Rojo", "CHI-123", 5);

// console.log(miCoche);
// miCoche.obtenerMarca(); //método heredado
// miCoche.obtenerCantidadDePuertas(); //método propio de coche

// const miMoto = new Moto("Ducati", "Verde", "ARG-123", "Gris");
// miMoto.obtenerMarca(); //método heredado
// miMoto.obtenerColorDeCasco(); //método propio de moto
