/* .sort() => el método .sort() ordena el array */

const arrayPersonas = ["Nicolas", "Celeste", "Estefani", "Javi", "Carlos"];

arrayPersonas.sort();

//console.log(arrayPersonas); //[ 'Carlos', 'Celeste', 'Estefani', 'Javi', 'Nicolas' ]

/* ---------OJO CON LOS NÚMEROS!-------------------- */
const numeros = [7, 5, 6, 3, 1, 14, 5, 8, 88, 54];

//numeros.sort();//⛔ no usar para números
// numeros.sort((a, b) => a - b);//=> 📈 Ordenar de forma ascendente.
numeros.sort((a, b) => b - a); //=> 📉 Ordenar de forma descendente.

console.log(numeros); 
