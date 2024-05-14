/* CICLO FOR => Mientras la condición indicada se cumpla, se
repetirá la ejecución de las instrucciones definidas
dentro de las llaves del for.
Además, después de cada repetición, se actualiza el
valor de las variables que se utilizan en la condición. */
/* SINTAXIS BÁSICA */

/* 
            1            2            3
for (inicializacion; condicion; actualizacion) {
    ...<Código JS a ejecutar>...
}

*/

console.log("INICIO DEL PROGRAMA");

let limonesPedidos = 3;
let canastaConLimones = 0;

for (let i = 0; i < limonesPedidos; i++) {
  console.log("Poniendo limones en la canasta");
  canastaConLimones++;
  console.log("Ahora tienes " + canastaConLimones + " Limones en la canasta");
}

console.log("Fin de su programa");
