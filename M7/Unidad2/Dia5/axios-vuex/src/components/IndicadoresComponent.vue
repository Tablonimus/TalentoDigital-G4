<template>
  <div>
    <h1>El valor del dolar hoy es: ${{ dollarPrice }}</h1>
    <button @click="getIndicadoresEconomicos">
      Obtener indicadores económicos
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "IndicadoresComponent",

  computed: {
    ...mapState(["dollarPrice", "country"]), //=>mapeo el $store.sate y traigo las variables de estados global
  },
  methods: {
    ...mapActions(["getIndicadoresEconomicos"]),
  },
};
</script>

<style scoped></style>
