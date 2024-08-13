import { createStore } from "vuex";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default createStore({
  state: {
    pokemonsArray: [], //[{...},{...},{...}]
  },
  mutations: {
    setPokemonsArray(state, pokemonsArray) {
      state.pokemonsArray = pokemonsArray;
    },
  },
  actions: {
    async getPokemons(context) {
      try {


        /* llamo a la api y genero el array que quiero guardar*/
        const URL_BASE = "https://pokeapi.co/api/v2/pokemon/";
        const firstResponse = await axios.get(URL_BASE);
        const pokemonsData = firstResponse.data.results;

        const pokemonsArray = await Promise.all(
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

        /* cambio el estado con una mutación */
        context.commit("setPokemonsArray", pokemonsArray);
      } catch (error) {
        console.log(error);
      }
    },

    async createPokemon(context, pokemon) {
      try {
        /* Hago una copia del array original */
        const copiaDelArray = [...this.state.pokemonsArray];
        /* Agrego al principio del array de copia el pokemon nuevo y formateado*/
        //Creo un id único para el nuevo pokemon
        const newUUID = uuidv4();

        //creo un nuevo pokemon
        const formattedPokemon = {
          id: newUUID,
          name: pokemon.name,
          image: pokemon.image,
        };

        copiaDelArray.unshift(formattedPokemon);
        /* cambio el estado con una mutación */
        context.commit("setPokemonsArray", copiaDelArray);

        alert("El pokemon ha sido creado correctamente.");
      } catch (error) {
        alert("ERROR: Pokemon no creado.");
      }
    },
  },
});
