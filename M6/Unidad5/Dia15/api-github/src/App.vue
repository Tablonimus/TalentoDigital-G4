<template>
  <div id="app">
    <p>{{ user.name }}</p>
    <p>{{ user.bio }}</p>
    <a :href="user.html_url" target="_blank">Visitar la página</a>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      user: {},
    };
  },
  async mounted() {
    try {
      const { data } = await axios.get("https://api.github.com/users/ingridoa");
      this.user = data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style></style>
