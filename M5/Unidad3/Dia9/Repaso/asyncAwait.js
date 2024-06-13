async function getSuperHero(id) {
    try {
      /* hago una peticion a la api */
      const data = await fetch(
        `https://www.superheroapi.com/api.php/10229043270299787/${id}`
      );
      /* convertir la data de respuesta en algo que pueda manipular (JSON)*/
      const superHero = await data.json();
      /* formateo la data de la api para utilizar solo lo que necesito */
      const miSuperHeroe = {
        id: superHero.id,
        nombre: superHero.name,
        imagen: superHero.image.url,
      };
  
      return miSuperHeroe;
    } catch (error) {
      console.log(error);
    }
  }
  
  /* si trabajo con módulos, puedo guardar en una variable lo que retorna la función */
  const miHeroe = await getSuperHero(15); //⏳
  
  console.log(miHeroe);
  