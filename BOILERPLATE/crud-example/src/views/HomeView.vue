<template>
  <div class="home">
    <section class="cards-container">
      <PokemonCard
        v-for="(pokemon, index) of pokemonsArray"
        :key="index"
        :pokemon="pokemon"
      />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import PokemonCard from "../components/PokemonCard.vue";

export default {
  name: "HomeView",
  components: {
    PokemonCard,
  },
  computed: {
    ...mapState(["pokemonsArray"]),
  },
};
</script>

<style scoped>
.cards-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
