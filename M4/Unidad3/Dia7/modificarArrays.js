let instrumentos = ["Guitarra", "Piano", "Violín", "Trompeta"];
// index =>             0         1        2         3

console.log(`Tengo ${instrumentos.length} instrumentos`);
console.log(instrumentos);

instrumentos[1] = "Violonchelo";
instrumentos[2] = "Maracas";
instrumentos[instrumentos.length] = "Gong"; //⛔Agrego un valor al final📛📛☠⛔

console.log("---------------------------------------------");
console.log(`Terminé con  ${instrumentos.length} instrumentos`);
console.log(instrumentos);
console.log("---------------------------------------------");
