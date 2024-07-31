<template>
  <div class="default-layout">
    <Navbar
      title=""
      logo="https://st2.depositphotos.com/1768926/10934/v/450/depositphotos_109347560-stock-illustration-water-wave-logo-template.jpg"
      :showLinks="false"
    />

    <main>
      <h1>La ruta a la que intentas acceder no existe</h1>
      <img
        src="https://www.elegantthemes.com/blog/wp-content/uploads/2021/04/404-plugin-featured.jpg"
        alt=""
      />
    </main>

    <!--  -->
    <FooterComponent
      title="Error 404"
      logo="https://st2.depositphotos.com/1768926/10934/v/450/depositphotos_109347560-stock-illustration-water-wave-logo-template.jpg"
    />
  </div>
</template>

<script>
import Navbar from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  name: "404View",
  components: {
    Navbar,
    FooterComponent,
  },
};
</script>

<style scoped></style>
