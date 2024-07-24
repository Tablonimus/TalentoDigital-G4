<template>
  <div class="counter-container">
    <h1>Contador</h1>
    <p>{{ counter }}</p>
    <div>
      <button @click="restarContador">➖</button>
      <button @click="incrementarContador">➕</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "CounterComponent",
  computed: {
    ...mapState(["counter"]),
  },
  methods: {
    ...mapActions(["incrementarContador", "restarContador"]),
  },
};
</script>

<style scoped>
.counter-container {
  border: 1px rgb(112, 112, 112) solid;
  border-radius: 15px;
  padding: 1rem;
}
</style>
