<template>
  <div class="card py-3" style="width: 12rem">
    <img :src="pokemon.image" class="card-img-top image-fix" alt="..." />
    <div class="card-body">
      <p class="card-text">{{ pokemon.id }} - {{ pokemon.name }}</p>
    </div>
    <router-link :to="`/editar/${pokemon.id}`">
      <button class="card-text">🖊 Editar</button>
    </router-link>

    <button @click="deletePokemonById(pokemon.id)" class="card-text">
      Eliminar
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "PokemonCard",
  props: ["pokemon"],
  methods: {
    ...mapActions(["deletePokemonById"]),
  },
};
</script>

<style scoped>
.image-fix {
  height: 100px;
  object-fit: contain;
}
</style>
