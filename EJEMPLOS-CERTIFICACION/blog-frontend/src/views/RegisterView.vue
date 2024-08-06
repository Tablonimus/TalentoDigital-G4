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
        <router-link to="/login">
          <button type="submit">Registrar</button>
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

export default {
  name: "RegisterView",
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
  methods: {},
};
</script>
<style scoped></style>
