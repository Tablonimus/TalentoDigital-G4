/* 

if (condición a cumplir) {
            if (condición a cumplir) {
            <código a ejecutar si la condición se cumple>
            } else {
                <código a ejecutar si la condición NO se cumple>
            }
} else {
    <código a ejecutar si la condición NO se cumple>
}



*/

/* Se creará un programa que devolverá un mensaje de error si eres menor de 18 años, 
y otras variables caso de ser mayor; si tienes entre 18 y 45 años y otro distinto si tienes mas de 45 */
let edad = 40;

if (edad > 18) {
  if (edad <= 45) {
    console.log("TODAVIA FALTA CRECER!");
  } else {
    console.log("YA ERES UN ADULTO");
  }
} else {
  console.error("Eres menor de 18!!!");
}
