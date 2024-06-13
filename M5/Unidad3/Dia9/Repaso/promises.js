const getSuperHero = (id) => {
  return new Promise((resolve, reject) => {
    /* hago una peticion a la api */
    const data = fetch(
      `https://www.superheroapi.com/api.php/10229043270299787/${id}`
    );

    if (data) {
      resolve(data); //succes que vemos en ajax
    } else {
      reject("Error"); //error que vemos en ajax
    }
  });
};

getSuperHero(15)
  .then((data) =>
    /* convertir la data de respuesta en algo que pueda manipular (JSON)*/
    data.json()
  )
  .then((superHero) => {
    /* formateo la data de la api para utilizar solo lo que necesito */
    const miSuperHeroe = {
      id: superHero.id,
      nombre: superHero.name,
      imagen: superHero.image.url,
    };
    /* uso la info formateada anteriormente */
    const miHeroe = miSuperHeroe;
    return console.log(miHeroe);
  })
  .catch((error) => console.log(error)); //errores (todos)
