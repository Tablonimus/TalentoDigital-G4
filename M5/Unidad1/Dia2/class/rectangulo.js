/* ---------------------------------------------------------------------------------------- */
/*✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅ */
/* LA CLASE ES EL MOLDE */
/* LA INTANCIA ES LO QUE CREO A PARTIR DE ESE MOLDE */
/* CLASES => utilizo la palabra reservada class y dentro constructor */
class Rectangulo {
  constructor(base, altura, color) {
    this.base = base;
    this.altura = altura;
    this.color = color;
  }

  calcularArea() {
    const area = this.base * this.altura;
    return area;
  }

  calcularPerimetro() {
    return (this.base + this.altura) * 2;
  }

  mostrarColor() {
    return this.color;
  }
}

/* Creo nuevas instancias de la clase rectángulo */
let rectanguloMagico = new Rectangulo(5, 10, "Arcoiris"); //=> ESTO ES INSTANCIAR UNA CLASE
let rectanguloNegro = new Rectangulo(5, 10, "Negro"); //=> LAS CLASES VAN CON MAYÚS, las instancias con minuscúla

const areaDelRectanguloMagico = rectanguloMagico.calcularArea();
console.log(areaDelRectanguloMagico);

const perimetroDelRectanguloMagico = rectanguloMagico.calcularPerimetro();
console.log(perimetroDelRectanguloMagico);

const colorMisterioso = rectanguloNegro.mostrarColor();
console.log(colorMisterioso)