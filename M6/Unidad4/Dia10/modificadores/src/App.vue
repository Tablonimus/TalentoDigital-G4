<template>
  <div id="app">
    <input
      :style="{ fontSize: tamanioDeFuente + 'px' }"
      @keyup.up="incrementar"
      @keyup.down="disminuir"
    /><!-- key up es el evento que detecta cuando una tecla se levanta; puedes elegir con el modificador con cual tecla interactuar -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      tamanioDeFuente: 16, //16 + px % rem em
    };
  },
  methods: {
    incrementar() {
      this.tamanioDeFuente++;
    },
    disminuir() {
      this.tamanioDeFuente--;
    },
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
</style>
