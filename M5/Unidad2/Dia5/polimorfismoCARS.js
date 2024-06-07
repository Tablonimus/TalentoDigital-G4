/* EJEMPLO DE APLICAR POLIMORFISMO A TRAVES DE UNA FUNCIÓN EXTERNA. */
/* 1 */
/* CLASE PADRE */
class Auto {
  constructor(marca, modelo, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
  }

  acelerar() {
    console.log("El auto está acelerando...");
  }

  frenar() {
    console.log("El auto está frenando...");
  }
}

/* CLASES HIJAS */
class Sedan extends Auto {
  constructor(marca, modelo, color, numPuertas) {
    super(marca, modelo, color);
    this.numPuertas = numPuertas;
  }

  abrirBaul() {
    console.log("Abriendo baúl...");
  }
}

class Camioneta extends Auto {
  constructor(marca, modelo, color, capacidadCarga) {
    super(marca, modelo, color);
    this.capacidadCarga = capacidadCarga;
  }

  transportarCarga() {
    console.log("Transportando carga...");
  }
}

class Deportivo extends Auto {
  constructor(marca, modelo, color, velocidadMaxima) {
    super(marca, modelo, color);
    this.velocidadMaxima = velocidadMaxima;
  }

  acelerarRapido() {
    console.log("¡Acelerando a máxima velocidad!");
  }
}

/* 2 */
function mostrarInformacionAuto(auto) {
  /* Cualquier tipo de auto, por ser una instancia extendida de Auto, comparte estas propiedades */
  console.log("Marca:", auto.marca);
  console.log("Modelo:", auto.modelo);
  console.log("Color:", auto.color);

  // Accedemos a métodos específicos según el tipo de auto
  if (auto instanceof Sedan) {
    console.log("Número de puertas:", auto.numPuertas);
    auto.abrirBaul(); // Llamada al método específico de Sedan
  } else if (auto instanceof Camioneta) {
    console.log("Capacidad de carga:", auto.capacidadCarga);
    auto.transportarCarga(); // Llamada al método específico de Camioneta
  } else if (auto instanceof Deportivo) {
    console.log("Velocidad máxima:", auto.velocidadMaxima);
    auto.acelerarRapido(); // Llamada al método específico de Deportivo
  }
}

/* 3 */

const sedan = new Sedan("Toyota", "Corolla", "Blanco", 4);
const camioneta = new Camioneta("Ford", "Ranger", "Gris", 800);
const deportivo = new Deportivo("Ferrari", "F8 Tributo", "Rojo", 330);

mostrarInformacionAuto(sedan);
mostrarInformacionAuto(camioneta);
mostrarInformacionAuto(deportivo);

/* Ejemplos de Polimorfismo con Autos en JavaScript
1. Clases para diferentes tipos de autos:

Imagina que tenemos clases para distintos tipos de autos: Sedan, Camioneta y Deportivo. Cada clase puede tener propiedades y métodos específicos:

2. Función para mostrar información de un auto:

Podemos crear una función que reciba un objeto de tipo Auto y muestre su información de manera genérica:



3. Ejemplo de uso:

Creando objetos de las clases Sedan, Camioneta y Deportivo, y luego mostrando su información usando la función mostrarInformacionAuto:


En este ejemplo:

Se observa el polimorfismo en la función mostrarInformacionAuto, ya que se comporta de manera diferente según el tipo de objeto Auto que se le pasa.
Se accede a propiedades y métodos específicos de cada clase (abrirBaul, transportarCarga, acelerarRapido) gracias al operador instanceof.
Este enfoque permite mostrar información relevante para cada tipo de auto de manera organizada y reutilizable.
Recuerda: El polimorfismo te permite crear código más flexible y adaptable a diferentes tipos de objetos, haciendo que tu programa sea más escalable y fácil de mantener


*/
