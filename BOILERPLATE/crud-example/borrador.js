const URL_BASE = "https://pokeapi.co/api/v2/pokemon/";
const firstResponse = await axios.get(URL_BASE);
const pokemonsData = firstResponse.data.results;

const pokemonsResponse = await Promise.all(
  pokemonsData.map(async (pokemon) => {
    const { data } = await axios.get(pokemon.url);
    const formattedPokemon = {
      id: data.id,
      name: data.name,
      image: data.sprites.other.dream_world.front_default,
    };
    return formattedPokemon;
  })
);

console.log(pokemonsResponse);
