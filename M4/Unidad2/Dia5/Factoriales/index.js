const misteryNumber = Number(prompt("Ingrese un número entre 1 y 20"));

function calculateAndShowResults(number) {
  if (number > 1 && number < 20) {
    /* 1- Calular las tablas y mostrarlas */
    calculateTable(number);
    /* 2- Calcular los factoriales y mostrarlos */
    calculateFactorial(number)
  } else {
    alert("ERROR: Número fuera de rango");
  }
}

function calculateTable(number) {
  for (let i = 0; i <= number; i++) {
    let result = i * number;

    console.log(`${i} x ${number} = ${result}`);
  }
}

function calculateFactorial(number) {
    console.log("calcular factoriales!!!!!!");
}



calculateAndShowResults(misteryNumber);
