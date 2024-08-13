<template>
  <div class="card py-3" style="width: 12rem">
    <img :src="pokemon.image" class="card-img-top image-fix" alt="..." />
    <div class="card-body">
      <p class="card-text">{{ pokemon.id }} - {{ pokemon.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokemonCard",
  props: ["pokemon"],
};
</script>

<style scoped>
.image-fix {
  height: 100px;
  object-fit: contain;
}
</style>
