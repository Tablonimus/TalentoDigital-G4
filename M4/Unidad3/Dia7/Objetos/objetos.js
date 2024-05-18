/* OBJETO LITERAL : representado por { } con pares de clave:valor */
let prestamo = {
  monto: 10000000,
  intereses: 15,
  seguros: 15000,
  cuotas: 24, //-1
  isActive: true,
  cancelarCuota: function () {
    if (this.cuotas > 0) {
      this.cuotas--;
      console.log(`Te quedan ${this.cuotas} `);
    }
    if (this.cuotas === 0) {
      console.log("FELICITACIONES TERMINAMOS CON TU DEUDA!!");
    }
  },
};

/* Acceder a las propiedades de un objeto  */

console.log(prestamo.monto); //dot notation => notacion por punto
console.log(prestamo["cuotas"]); //bracket notation => notacion por llaves

/* Ejecutar método de un objeto */
prestamo.cancelarCuota();
