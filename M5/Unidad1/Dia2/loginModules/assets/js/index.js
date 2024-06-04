/* IMPORT => palabra reservada que me permite importar funciones y variables a este archivo */
import { login } from "./auth.js";
import { sumar, restar } from "./operaciones.js";

/* DOM */
let addBtn = document.getElementById("add-btn");
let emailTag = document.getElementById("email-input");
let passwordTag = document.getElementById("pass-input");
let formTag = document.getElementById("login-form"); //=> si tiene submit=> PREVENT DEFAULT AL EVENTO!!!!!!!!!!!!

formTag.addEventListener("submit", function (event) {
  event.preventDefault();

  let emailValue = emailTag.value;
  let passwordValue = passwordTag.value;

  let loggedUser = login(emailValue, passwordValue);

  if (!loggedUser) {
    return alert("Credenciales incorrectas.");
  } else {
    return alert("Felicitaciones, has ingresado!");
  }
});

addBtn.addEventListener("click", () => {
  console.log("click");
  let resultado = sumar(2, 2); //4
  return console.log(resultado);
});
