<template>
  <div class="home">
    <nav>
      <router-link to="/">Login</router-link> |
      <router-link to="/register">Registro</router-link> |
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <h2>home</h2>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
