<template>
  <button @click="saludar">Hola Mundo! Esto es Vue.js</button>
  <br />
  <button @click="sorpresa">Botón Sorpresa</button>
  <button @click="notaMax">Botón Nota Max</button>
  <button @click="obtenerNotas">Mostrar notas en consola</button>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      notas: [1, 2, 5, 3, 6, 10],
    };
  },
  methods: {
    saludar() {
      alert("HOLA!!");
    },
    sorpresa() {
      alert("Tu número de la suerte es:" + Math.ceil(Math.random() * 100));
    },
    notaMax() {
      alert("Tu nora MAX es : " + Math.max(...this.notas));
    },
    obtenerNotas() {
      this.saludar(); /* Puedo llamar a otros métodos con this */
      console.log(
        this.notas
      ); /* Puedo llamar a las variables de estado con this*/
    },
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
