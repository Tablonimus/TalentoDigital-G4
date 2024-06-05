class Motores {
  constructor(serial, fabricante) {
    this.serial = serial;
    this.fabricante = fabricante;
  }
  datosMotor() {
    return `El número de serial es: ${this.serial} y el fabricante es la empresa: ${this.fabricante}`;
  }
}

class Electricos extends Motores {
  constructor(serial, fabricante, potencia, corriente) {
    super(serial, fabricante);
    this.potencia = potencia;
    this.corriente = corriente;
  }
  tipoCorriente() {
    return `El tipo de corriente es: ${this.corriente}`;
  }
}

class CorrienteContinua extends Electricos {
  constructor(serial, fabricante, potencia, corriente, voltaje, tipo) {
    super(serial, fabricante, potencia, corriente);
    this.voltaje = voltaje;
    this.tipo = tipo;
  }
}

class CorrienteAlterna extends Electricos {
  constructor(serial, fabricante, potencia, corriente, fases, frecuencia) {
    super(serial, fabricante, potencia, corriente);
    this.fases = fases;
    this.frecuencia = frecuencia;
  }
}

const nuevoTransformador = new CorrienteContinua(
  "123wera",
  "LinuxTransforms",
  "22W",
  "CC",
  "110V",
  "Shunt"
);

let motorCC = new CorrienteContinua(
  "133DGH",
  "GE",
  "2000W",
  "CC",
  "220CC",
  "Shunt"
);
let motorCA = new CorrienteAlterna(
  "7566DGD",
  "ABB",
  "2HP",
  "CA",
  "Monofasico",
  "50Hz"
);

console.log(motorCA);
