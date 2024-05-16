/* El operador || => basta con que una de sus condiciones se cumpla para que el resultado sea TRUE */
/* Este software quiere que vayas a la playa, basta con que alguna condición se cumpla para que vayas */
const name = "Romier";
const is_Alive = true;
const is_Sunny = true;

const canGoToBeach = is_Alive || is_Sunny;

console.log("Voy a la playa? ", canGoToBeach);
