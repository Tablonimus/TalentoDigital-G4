const user = { email: "asd@asd", password: "1234" };
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const submitButton = document.getElementById("submitBtn");

/* Opcion para guardar un valor de un input en evento on change */
//  let userEmail = "";
// inputEmail.addEventListener("change", (event) => {
//   userEmail = event.target.value;
//   console.log(userEmail);
// });

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (
    inputEmail.value === user.email &&
    inputPassword.value === user.password
  ) {
    location.href = "./home.html";
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
});
