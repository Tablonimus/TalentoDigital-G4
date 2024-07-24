<template>
  <div class="admin">
    <h1>Setear el mensaje misterioso</h1>
    <input v-model="message" type="text" id="message-input" />
    <button @click="mostrarNuevoMensaje" :value="message">
      Confirmar mensaje
    </button>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AdminView",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    ...mapActions(["mostrarNuevoMensaje"]),
  },
};
</script>
