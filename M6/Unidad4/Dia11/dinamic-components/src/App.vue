<template>
  <div>
    <button @click="componenteARenderizar = 'LetrasComponent'">Letras</button>
    <button @click="componenteARenderizar = 'NumerosComponent'">Numeros</button>

    <div>
      <component :is="componenteARenderizar" />
    </div>
    
  </div>
</template>

<script>
import NumerosComponent from "./components/NumerosComponent.vue";
import LetrasComponent from "./components/LetrasComponent.vue";

export default {
  name: "App",
  components: {
    NumerosComponent,
    LetrasComponent,
  },
  data() {
    return {
      componenteARenderizar: "LetrasComponent",//"NumerosCompents"
    };
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
