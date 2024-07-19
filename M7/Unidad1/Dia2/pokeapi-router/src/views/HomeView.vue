<template>
  <div class="home">
    <h1>HOME</h1>

    <section class="cards-container">
      <div
        class="pokemon-card"
        :key="index"
        v-for="(pokemon, index) in pokemons"
      >
        <router-link :to="`/pokemon/${pokemon.id}`">

          <h3>{{ pokemon.name }} - ID {{ pokemon.id }}</h3>
          <img :src="pokemon.image" alt="" class="pokemon-image" />
          
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "HomeView",
  data() {
    return {
      pokemons: [],
    };
  },
  components: {},
  async mounted() {
    try {
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

      this.pokemons = pokemonsResponse;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}
.pokemon-card {
  border: 1px solid black;
  padding: 5px;
  border-radius: 10px;
}
.pokemon-image {
  height: 150px;
  width: 100px;
  object-fit: contain;
}
</style>
