<template>
  <div>
    <form @submit.prevent="login">
      <label for="user">Usuario</label>
      <input v-model="username" type="text" id="user" />

      <br />
      <label for="password">Contraseña</label>
      <input v-model="password" type="password" id="password" />
      <br />
      <button type="submit">Ingresar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      const users = [
        {
          username: "admin",
          password: "1234",
        },
        {
          username: "empleado",
          password: "asdf",
        },
      ];

      const loggedUser = users.find(
        (user) =>
          user.password === this.password && user.username === this.username
      ); // loggedUser puede ser o un objeto de usuario {...} o undefined

      if (loggedUser) {
        localStorage.setItem("loggedUser", JSON.stringify(loggedUser)); //Ejemplo de como almacenar un usuario el local storage.
        this.$router.push("/home"); //redirecciona al home ["login", "productos", "home"]
      } else {
        alert("Credenciales inválidas.");
      }
    },
  },
};
</script>

<style scoped></style>
