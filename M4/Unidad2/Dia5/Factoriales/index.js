const misteryNumber = Number(prompt("Ingrese un número entre 1 y 20"));

function calculateAndShowResults(number) {
  if (number > 1 && number < 20) {
    /* 1- Calular las tablas y mostrarlas */
    calculateTable(number);
    /* 2- Calcular los factoriales y mostrarlos */
    calculateFactorials(number);
  } else {
    alert("ERROR: Número fuera de rango");
  }
}

function calculateTable(number) {
  for (let i = 1; i <= number; i++) {
    let result = i * number;

    console.log(`${i} x ${number} = ${result}`);
  }
}

function calculateFactorials(selectedNumber) {
  /* Ej: yo le paso el 3 => me debe calcular los factoriales desde el 1 hasta el factorial de 3  */
  for (let i = 1; i <= selectedNumber; i++) {
    /* Calcular el factorial del número iterado */
    const iteratedNumber = i;

    /* Para calcular el factorial del número iterado, debo multiplicar desde el 1 hasta el número iterado. */
    let result = 1; //2

    for (let j = 1; j <= iteratedNumber; j++) {
      /* debo multiplicar el producto del número iterado por j */
      result = result * j;
    }
    console.log(`El factorial de ${iteratedNumber} es ${result}`);
  }
}

calculateAndShowResults(misteryNumber);
