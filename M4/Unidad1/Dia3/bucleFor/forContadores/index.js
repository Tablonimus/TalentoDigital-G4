let puntajePersona = 0;
let puntajePc = 0;
let miJugada = "loose"

for (let i = 0; i < 1; i++) {
  if (miJugada === "win") {
    puntajePersona++;
  } else if (miJugada === "loose") {
    puntajePc++;
  }
}

console.log(puntajePersona);
console.log(puntajePc);
