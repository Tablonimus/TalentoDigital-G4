<template>
  <div class="registerClass">
    <h2>Registro</h2>
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
    <button @click="register">Registrarse</button>
  </div>
</template>

<script>
import {
  auth,
  createUserWithEmailAndPassword,
} from "../config/firebaseConfig.js";

export default {
  name: "RegisterView",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async register() {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        console.log("Credenciales", userCredential);
        const user = userCredential.user;

        console.log("Usuario registrado", user);
      } catch (error) {
        console.log("Error en el registro", error);
      }
    },
  },
};
</script>
