<template>
  <div class="default-layout">
    <Navbar
      title="Vista de Inicio"
      logo="https://st2.depositphotos.com/1768926/10934/v/450/depositphotos_109347560-stock-illustration-water-wave-logo-template.jpg"
      :showLinks="true"
    />
    <!--  -->
    <main class="h-100 "><h1>Inicio de la web</h1></main>
    <!--  -->
    <FooterComponent
      title="Gracias por elegirnos"
      logo="https://st2.depositphotos.com/1768926/10934/v/450/depositphotos_109347560-stock-illustration-water-wave-logo-template.jpg"
    />
  </div>
</template>

<script>
import Navbar from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    FooterComponent,
  },
};
</script>
