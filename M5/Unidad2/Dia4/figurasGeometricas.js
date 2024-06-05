class FiguraGeometrica {
  constructor(lado) {
    this.lado = lado;
  }
}

class Cuadrado extends FiguraGeometrica {
  constructor(lado) {
    super(lado);
  }

  calcularArea() {
    const area = this.lado * this.lado;
    console.log(area);
    return area;
  }
}

const nuevoPoli = new Cuadrado(5);

// console.log(nuevoPoli);
// nuevoPoli.calcularArea();
