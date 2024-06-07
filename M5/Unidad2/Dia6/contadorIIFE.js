//El patrón de módulo retorna un objeto con los métodos que podran ser accedidos posteriormente.(métodos públicos)

const moduloEjemplo = (() => {
  /* métodos privados */
  let contador = 0;

  const saludar = () => {
    console.log("hola");
  };

  return {
    /* métodos públicos */
    incrementarContadorAutomatico: () => {
      saludar(); //=> método privado que es llamado dentro de uno público
      contador++;
      //   console.log("Valor actual del contador =>", contador);
      return;
    },
    incrementarContadorManual: (numero) => {
      contador = contador + numero;
      return contador;
    },
    reseteoContador: () => {
      console.log(`valor del contador antes de reiniciar:${contador}`);
      contador = 0;
      return console.log("Contador reseteado");
    },
  };
})(); //=> el móduloEjemplo se autoejecuta y devuelve un objeto con métodos publicos a los cuales podré acceder (solamente a ellos).

moduloEjemplo.incrementarContadorAutomatico();
moduloEjemplo.incrementarContadorManual(6);
moduloEjemplo.reseteoContador();
moduloEjemplo.contador;
