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
              id: data.id.toString(),
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
        /* Agrego el pokemon al principio del array */
        copiaDelArray.unshift(formattedPokemon);
        /* cambio el estado con una mutación */
        context.commit("setPokemonsArray", copiaDelArray);

        alert("El pokemon ha sido creado correctamente.");
      } catch (error) {
        alert("ERROR: Pokemon no creado.");
      }
    },

    async deletePokemonById(context, pokemonToDeleteId) {
      try {
        /* Hago una copia del array original */
        const copiaDelArray = [...this.state.pokemonsArray];

        /* Filtro y elimino del array al pokemon deseado */
        const arrayModificado = copiaDelArray.filter(
          (pokemon) => pokemon.id !== pokemonToDeleteId
        );

        /* Verifico si se modificó el array */
        if (copiaDelArray.length > arrayModificado.length) {
          alert("El pokemon ha sido eliminado correctamente.");
        } else if (copiaDelArray.length === arrayModificado.length) {
          alert("No se ha eliminado ningún pokemon.");
        }

        /* cambio el estado con una mutación */
        context.commit("setPokemonsArray", arrayModificado);
      } catch (error) {
        alert("ERROR: Pokemon no eliminado.");
      }
    },


    async deletePokemonByName(context, pokemonToDeleteName) {
      try {
        /* Hago una copia del array original */
        const copiaDelArray = [...this.state.pokemonsArray];

        /* Filtro y elimino del array al pokemon deseado */
        const arrayModificado = copiaDelArray.filter(
          (pokemon) => pokemon.name !== pokemonToDeleteName
        );

        /* Verifico si se modificó el array */
        if (copiaDelArray.length > arrayModificado.length) {
          alert("El pokemon ha sido eliminado correctamente.");
        } else if (copiaDelArray.length === arrayModificado.length) {
          alert("No se ha eliminado ningún pokemon.");
        }

        /* cambio el estado con una mutación */
        context.commit("setPokemonsArray", arrayModificado);
      } catch (error) {
        alert("ERROR: Pokemon no eliminado.");
      }
    },

    async editPokemon(context, pokemonToEdit) {
      try {
        /* Hago una copia del array original */
        const copiaDelArray = [...this.state.pokemonsArray];

        /* Busco el índice del pokemon a editar */
        const indexOfPokemon = copiaDelArray.findIndex(
          (pokemon) => pokemon.id === pokemonToEdit.id
        );

        /* Su existe un pokemon para editar que coincide con el id dado, lo edito */
        if (indexOfPokemon || indexOfPokemon == 0) {
          // busco en el array el pokemon especificado y le reasigno el valor.
          copiaDelArray[indexOfPokemon] = pokemonToEdit;
          /* cambio el estado con una mutación */
          context.commit("setPokemonsArray", copiaDelArray);

          alert("El pokemon ha sido editado correctamente.");
        } else {
          alert("El pokemon no ha sido encontrado.");
        }
      } catch (error) {
        alert("ERROR: Pokemon no editado.");
      }
    },
    
  },
});
