<template>
  <div class="default-layout">
    <!--  -->
    <Navbar
      title="Login"
      logo="https://st2.depositphotos.com/1768926/10934/v/450/depositphotos_109347560-stock-illustration-water-wave-logo-template.jpg"
      :showLinks="false"
    />
    <!--  -->
    <main class="h-100">
      <form
        @submit.prevent="login({ user, password })"
        class="d-flex flex-column gap-4 justify-content-center align-items-center"
      >
        <div class="d-flex flex-column">
          <label for="">Usuario</label>
          <input v-model="user" type="text" />
        </div>
        <div class="d-flex flex-column">
          <label for="">Contraseña</label>
          <input v-model="password" type="password" />
        </div>
        <!-- Descomentar router-link para dar acceso directo sin login, NO OLVIDAR DESCOMENTAR LA LÍNEA DEL GUARDIAN => CTRL + } -->
        <router-link to="/inicio">
          <button type="submit">Ingresar</button>
        </router-link>
        <router-link to="/registro">
          <p>
            ¿No tienes cuenta? Haz click
            <span>aquí!</span>
          </p>
        </router-link>
      </form>
    </main>
    <!--  -->
    <FooterComponent
      title="Bienvenido a nuestra web"
      logo="https://st2.depositphotos.com/1768926/10934/v/450/depositphotos_109347560-stock-illustration-water-wave-logo-template.jpg"
    />
    <!--  -->
  </div>
</template>

<script>
import Navbar from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import { mapActions } from "vuex";

export default {
  name: "LoginView",
  components: {
    Navbar,
    FooterComponent,
  },
  data() {
    return {
      user: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
  },
};
</script>
<style scoped></style>
