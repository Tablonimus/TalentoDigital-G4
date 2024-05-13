const DBuser = "carlos1890";
const DBpassword = "abc123";

const myUser = prompt("Ingrese su usuario para continuar");
const myPassword = prompt("Ingrese su contraseña para continuar");

if (myUser === DBuser && myPassword === DBpassword) {
  alert("USUARIO CORRECTO! HAS HACKEADO LA NASA.");
} else {
  alert("Usuario incorrecto, la policia se dirige a su domicilio.");
}
