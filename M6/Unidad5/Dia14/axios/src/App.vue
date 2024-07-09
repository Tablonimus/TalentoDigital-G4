<template>
  <div>
    <h1>Climas</h1>
    <button @click="setClimas">Cargar climas</button>
    <ul>
      <li :key="index" v-for="(clima, index) of climas">
        {{ clima.Estacion }} - {{ clima.Temp }}°
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      climas: [],
    };
  },
  methods: {
    async getClimas() {
      try {
        const url = "https://api.gael.cloud/general/public/clima";

        const { data } = await axios.get(url);
        return data;
        // const response = await axios.get(url);
        // return response.data;
        /* Con destructuring */
      } catch (error) {
        console.log(error);
      }
    },

    async setClimas() {
      const climasResponse = await this.getClimas();
      console.log(climasResponse);
      this.climas = climasResponse;
    },
  },
};
</script>

<style></style>
