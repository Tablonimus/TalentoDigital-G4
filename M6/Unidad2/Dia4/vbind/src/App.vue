<template>
  <div id="app">
    <div>
      <label for="perrito-img">Insertar url de un perrito</label>
      <input id="perrito-img" type="text" v-model="img1" />
    </div>
    
    <img v-bind:src="img1" alt="perrito" />

    <img :src="img1" alt="perrito" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      img1: "https://images.unsplash.com/photo-1510337550647-e84f83e341ca?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };
  },
};
</script>

<style>
img {
  width: 500px;
  height: 500px;
  object-fit: contain;
}
</style>
