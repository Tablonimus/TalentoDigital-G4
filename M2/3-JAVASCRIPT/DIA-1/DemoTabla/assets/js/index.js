


/* PASO 1 => SELECCIONO LAS ETIQUETAS A MODIFICAR */
let etiquetaNombre = document.getElementById("nombre");

let etiquetaApellido = document.getElementById("apellido");

let etiquetaProfesion = document.getElementById("profesion");

let etiquetaSalario = document.getElementById("salario");

/* PASO 2 => CREAR VARIABLES POR EL USUARIO, PARA LUEGO INSERTARLAS EN LAS ETIQUETAS CORRESPONDIENTES */
let nombre = prompt("Ingrese un nombre");
let apellido = prompt("Ingrese un apellido");
let profesion = prompt("Ingrese una profesión");
let salario = prompt("Ingrese un salario");

/* PASO 3 => MOSTRAR EN PANTALLA LOS DATOS INGRESADOS  */
etiquetaNombre.innerHTML = nombre
etiquetaApellido.innerHTML = apellido
etiquetaProfesion.innerHTML = profesion
etiquetaSalario.innerHTML = salario

console.log(nombre); 

