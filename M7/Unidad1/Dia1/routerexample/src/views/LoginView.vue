<template>
  <div class="login">
    <label for="">Usuario</label>
    <input type="text" />
    <label for="">Contraseña</label>
    <input type="password" />
    <router-link to="/">
      <button>Ingresar</button>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "LoginView",
};
</script>
<style></style>
