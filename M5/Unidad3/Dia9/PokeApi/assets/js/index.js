/* CONSUMO DE API */
/* Receta para consumir la api:
1 Url
1 funcion
1 invocación
2 Paciencia
*/
const URL_BASE = "https://pokeapi.co/api/v2/pokemon/?limit=100";
const cardsSection = document.getElementById("cards-container");

const searchPokemons = async () => {
  try {
    const response = await fetch(URL_BASE);
    const data = await response.json();
    const pokemonsArray = data.results; //=> [{.}, {.}, {.}]
    //                                                    ↑

    pokemonsArray.forEach(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const data = await response.json();

      /* Foarmateo la data */
      const pokemonInfo = {
        nombre: data.name,
        imagen:
          data.sprites.other.dream_world.front_default ||
          "INSERTE AQUI URL DE IMG POR DEFAULT",
        peso: data.weight,
      };

      const pokeCard = `
        <div class="card p-4" style="width: 18rem;">
            <img src="${pokemonInfo.imagen}" class="card-img-top" alt="${pokemonInfo.nombre}" style="height: 18rem;">
            <div class="card-body">
                    <h3>${pokemonInfo.nombre.toUpperCase()}</h3>
                    <h3>${pokemonInfo.peso} Kg</h3>
            </div>
        </div>        
        `;

      cardsSection.innerHTML += pokeCard;
    });
  } catch (error) {
    console.log(error);
    alert(error.message); //TIP => error es un objeto que siempre viene con la propiedad message
  }
};

searchPokemons();

/* OPCION CON .THEN()

    // const pokemons = await fetch(URL_BASE)
    //   .then((response) => response.json())
    //   .then((data) => data.results); //OPCIÓN CON .then()
    
    */
