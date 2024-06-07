class Pelicula {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Largometraje extends Pelicula {
  constructor(runTime, name) {
    super(name);
    this.runTime = runTime;
  }

  getRunTime() {
    return this.runTime;
  }
  setRunTime(newRunTime) {
    this.runTime = newRunTime;
  }
}

class Cortometraje extends Pelicula {
  constructor(runTime, name) {
    super(name);
    this.runTime = runTime;
  }

  getRunTime() {
    return this.runTime;
  }
  setRunTime(newRunTime) {
    this.runTime = newRunTime;
  }
}

class MyApp {
  play(pelicula) {
    const message = `La película ${pelicula.getName()} se está reproduciendo... Tiene una duración de ${pelicula.getRuntime()}`;
    return message;
  }
}

/* Creamos las películas que podré reproducir en mi app */
const largometraje = new Largometraje("El rey León", "105min");
const cortometraje = new Cortometraje("Hulk vs Wolverine", "20min");

/* Creo una instancia de myApp */
const netflix = new MyApp();

/* Ejecuto su método play=> el cual recibe un tipo de película. */
const playing = netflix.play(largometraje);

console.log(playing);
