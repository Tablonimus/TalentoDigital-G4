console.log("INICIO");

let array =["manzana", "pera", "P***", "ne***"]

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    continue;
  }
  console.log("Tenemos un impar!!" + i);
}

console.log("FIN");