<template>
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <img alt="Vue logo" src="./assets/logo.png" />
  <img alt="Vue logo" src="./assets/logo.png" />
  <DescriptionComponent title="UN TITULO" />
  <DescriptionComponent title="OTRO TITULO" />
  <DescriptionComponent title="MAS TITULOS DEL TITULO" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import DescriptionComponent from "./components/DescriptionComponent.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    DescriptionComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
