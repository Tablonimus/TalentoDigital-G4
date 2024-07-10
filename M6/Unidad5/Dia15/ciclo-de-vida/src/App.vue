<template>
  <div id="App">
    <div>
      <img
        v-if="!usuarios.length"
        src="https://cdn.dribbble.com/users/2693778/screenshots/5986999/spinner-sm.gif"
        class="loader"
      />
    </div>
    <div v-for="(usuario, index) in usuarios" :key="index">
      <img :src="usuario.picture.large" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      usuarios: [], //.length => 0   ..... 30
    };
  },
  methods: {},
  async mounted() {
    try {
      const url = "https://randomuser.me/api?results=30";
      const { data } = await axios.get(url);
      this.usuarios = data.results;
    } catch (error) {
      console.log(error);
      alert("Error en la petición");
    }
  },
};
</script>

<style>
#App {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
}

.loader {
  height: 100vh;
  width: 100vw;
  position: absolute;
}
</style>
