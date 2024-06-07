class Animal {
  hacerSonido() {
    console.log("Este animal hace un sonido");
  }
}

class Perro extends Animal {
  hacerSonido() {
    console.log("¡Guau!");
  }
}

class Gato extends Animal {
  hacerSonido() {
    console.log("¡Miauuu!");
  }
}

const perro = new Perro();
const gato = new Gato();

perro.hacerSonido(); // ¡Guau!
gato.hacerSonido(); // ¡Miauuu!

/* 

¡Claro que sí! En JavaScript, el polimorfismo se refiere a la capacidad de que un mismo método o función se comporte de manera diferente dependiendo del tipo de objeto al que se le aplica. Esto significa que podemos tener varias acciones con el mismo nombre, pero cada una realiza una tarea específica para un tipo de objeto en particular.

Imagina que tienes clases para diferentes animales, como Perro y Gato. Ambos pueden tener un método llamado hacerSonido(), pero cada uno lo implementa de manera diferente: Perro.hacerSonido() ladra, mientras que Gato.hacerSonido() maúlla.

¿Cómo se logra el polimorfismo en JavaScript?

Principalmente, hay dos mecanismos para lograr el polimorfismo en JS:

1. Herencia:

Las clases heredan propiedades y métodos de sus clases padre. Esto significa que si definimos un método en una clase padre, todas las clases hijas que hereden de ella podrán utilizarlo. Cada clase hija puede, además, reescribir (o sobrescribir) ese método para adaptarlo a su comportamiento específico.

Beneficios del polimorfismo:

Código más flexible y reutilizable: Al poder definir comportamientos similares para diferentes tipos de objetos, el código se vuelve más adaptable y fácil de mantener.
Mayor claridad y organización: El polimorfismo permite estructurar el código de manera más organizada, ya que las acciones relacionadas se agrupan en sus respectivas clases o interfaces.
Facilita el desarrollo de aplicaciones escalables: Al poder agregar nuevos tipos de objetos sin modificar el código existente, las aplicaciones se vuelven más fáciles de extender y mantener a medida que crecen.
Recuerda: El polimorfismo es un concepto fundamental en la programación orientada a objetos, y su uso adecuado en JavaScript te permite crear código más flexible, reutilizable y organizado.

Recursos adicionales:

https://codequick.io/course-page/616329df29de03ea99e06ed5
https://platzi.com/cursos/javascript-poo/
https://medium.com/@nicolasbontempo/programando-javascript-orientado-a-objetos-87b1e98af6e4
https://m.youtube.com/watch?v=gYKBoRFJo0M
*/
