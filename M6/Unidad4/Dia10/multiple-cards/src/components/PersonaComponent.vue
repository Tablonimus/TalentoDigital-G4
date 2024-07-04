<template>
  <div class="persona">
    <h2>{{ titulo }}</h2>
    
    <img :src="foto" :alt="foto" />
    <h2>{{ nombre }}</h2>
    <p>{{ descripcion }}</p>
  </div>
</template>

<script>
export default {
  name: "PersonaComponent",
  props: ["foto", "nombre", "descripcion", "titulo"],
};
</script>

<style scoped>
.persona {
  margin-top: 10px;
  text-align: center;
  width: fit-content;
  border: 2px solid black
}

img {
  border-radius: 100%;
  height: 200px;
  width: 200px;
  object-fit: cover;
}
</style>
