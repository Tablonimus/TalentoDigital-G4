/* Form inputs */
const registerForm = document.getElementById("registerForm");
const nameInput = document.getElementById("nameInput");
const phoneInput = document.getElementById("phoneInput");
const emailInput = document.getElementById("emailInput");
/* Errors Span */
const errorName = document.getElementById("errorName");
const errorPhone = document.getElementById("errorPhone");
const errorEmail = document.getElementById("errorEmail");
/* Regex constants */
const regexName = /^(J[\w\s]*)$/;
const regexPhone = /^\d{10,12}$/;
const regexEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

registerForm.addEventListener("submit", function (event) {
  /* Resetear el comportamiento por defecto de submit/form */
  event.preventDefault();
  /* Recolectar el valor de los inputs */
  let name = nameInput.value;
  let phone = phoneInput.value;
  let email = emailInput.value;

  /* Validar cada input y arrojar un error en el que no pase el test */
  /* Si el test pasa, el error se va */
  /* Si hay al menos un test incorrecto, nó puedo enviar el formulario */
  /* if (phoneTest && emailTest && nameTest) {alert registrado} else {alert valores incorrectos} */
  registerInputValidator(name, phone, email);
});

function registerInputValidator(name, phone, email) {
  const isNameValid = regexName.test(name);
  const isPhoneValid = regexPhone.test(phone);
  const isEmailValid = regexEmail.test(email);

  clearErrors();

  if (!isNameValid) {
    errorName.innerHTML = "nombre mal escrito";
  }

  if (!isPhoneValid) {
    errorPhone.innerHTML = "telefono mal escrito";
  }

  if (!isEmailValid) {
    errorEmail.innerHTML = "email mal escrito";
  }

  if (isNameValid && isPhoneValid && isEmailValid) {
    clearErrors();
    clearInputs();
    alert("todo validado");
  }
}

function clearErrors() {
  /* Limpiamos los errores de los span*/
  errorName.innerHTML = "";
  errorPhone.innerHTML = "";
  errorEmail.innerHTML = "";
}
function clearInputs() {
  /* Limpiamos lo que está escrito en los inputs*/
  nameInput.value = "";
  phoneInput.value = "";
  emailInput.value = "";
}
