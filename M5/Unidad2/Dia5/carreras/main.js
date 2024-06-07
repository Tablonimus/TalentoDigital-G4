import { Car } from "./domain/Vehicle.js";
import { Driver } from "./domain/Driver.js";
import { Race } from "./domain/Race.js";
let startButton = document.getElementById("start-btn");
let winnerCardSection = document.getElementById("winner-section");

/* Necesito un auto por cada piloto */
/* 1 */
const ferrariMorado = new Car("Morado", "Ferrari", 225, "M");
const nikyLauda = new Driver("Niky", "Lauda", 1, ferrariMorado);

/* 2 */
const ferrariRojo = new Car("Rojo", "Ferrari", 230, "M");
const michiShummi = new Driver("Michael", "Schumacher", 2, ferrariRojo);

/* 3 */
const mcLarenBlanco = new Car("Blanco", "McLaren", 235, "M");
const lewisHammilton = new Driver("Lewis", "Hammilton", 3, mcLarenBlanco);

/* Necesito muchos pilotos por cada carrera */
let monacoDrivers = [nikyLauda, michiShummi, lewisHammilton];

let grandPrixMonaco = new Race(
  "Gran Premio de Mónaco",
  "Monaco, España",
  "07/08/2024",
  monacoDrivers
);

startButton.addEventListener("click", () => {
  const winner = grandPrixMonaco.startRace(); //=> lo ejecuto desde un evento

  const winnerCard = `
  <h1>GANADOR DEL ${grandPrixMonaco.name}</h1>
  <ul>
      <li>Nombre completo: ${winner.name} ${winner.lastName}</li>
      <li>Numero de corredor: ${winner.number}</li>
  </ul>
`; //=> creo una card para mostrar el ganador
  return (winnerCardSection.innerHTML += winnerCard); //=> incorporo la card dentro de la etiqueta HTML.
});
