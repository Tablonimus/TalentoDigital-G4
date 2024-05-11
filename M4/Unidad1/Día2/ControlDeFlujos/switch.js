/* SINTAXIS BÁSICA */
/* 
    switch (variable) {

    case valor_1:
    // instrucciones
    break;

    case valor_2:
    // instrucciones
   
    default:
    // instrucciones
    break;
    }
*/
/* La empresa tiene un software que recibe un ambiente de despliegue para una aplicación y devuelve las credenciales para que ingresemos la página según el ambiente
Los ambientes posibles que tienen son DEV, TEST, PROD
*/

let environment = "QA";

console.log("INICIANDO PRUEBA DE ENTORNO DEL PROGRAMA");

switch (environment) {
  case "DEV":
    console.log("Las credenciales de desarrollo son : jkl-456");
    break;

  case "TEST":
    console.log("Las credenciales de testing son : test-test");
    break;

  case "PROD":
    console.log(
      "Las credenciales de producción son : khlawe5rfaf156asdf-25456sdfaf4a89wer"
    );
    break;

  default:
    console.log("El ambiente proporcionado no es válido");
    break;
}

console.log("FIN DEL PROGRAMA");
