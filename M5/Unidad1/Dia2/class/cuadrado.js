/* FUNCION CONSTRUCTORA */
function Cuadrado(lado) {
  this.lado = lado;
}
/* Creo una nueva instancia de la clase cuadrado */
let cuadradito = new Cuadrado(20);

/* ------------------------------------------------------ */
/*✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅ */
/* LA CLASE ES EL MOLDE */
/* LA INTANCIA ES LO QUE CREO A PARTIR DE ESE MOLDE */
/* CLASE CONSTRUCTORA */
class CuadradoClase {
  constructor(lado) {
    this.lado = lado;
  }
  calcularArea() {
    return lado * lado;
  }

  calcularPerimetro() {
    return lado * 4;
  }
}
/* Creo una nueva instancia de la clase cuadrado */
let c1 = new CuadradoClase(10);
