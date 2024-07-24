<template>
  <div class="mistery-container">
    <h1>Componente mensaje misterioso</h1>
    <p>{{misteryMessage}}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MisteryMessageComponent",
  computed: {
    ...mapState(["misteryMessage"]),
  },
};
</script>

<style scoped>
.mistery-container {
  border: 1px rgb(112, 112, 112) solid;
  border-radius: 15px;
  padding: 1rem;
}
</style>
