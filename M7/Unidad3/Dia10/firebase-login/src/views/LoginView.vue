<template>
  <div class="loginClass">
    <h2>Login</h2>
    <label for="">Email</label>
    <input v-model="email" type="email" placeholder="Ingrese su correo..." />
    <br />
    <label for="">Contraseña</label>
    <input
      v-model="password"
      type="password"
      placeholder="Ingrese su contraseña..."
    />
    <br />
    <button @click="login({ email, password })">Iniciar sesión</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    ...mapActions(["login"]),
  },
};
</script>
