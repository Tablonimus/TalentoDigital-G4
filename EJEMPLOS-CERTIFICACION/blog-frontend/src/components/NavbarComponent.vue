<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <!-- RUTA PARA IR AL INICIO -->
      <router-link to="/inicio">
        <img :src="logo" class="navbar-image" />
      </router-link>
      <a class="navbar-brand" href="#">{{ title }}</a>
      <div v-if="showLinks">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/login"
                >Cerrar sesión</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  props: ["title", "logo", "showLinks"],
};
</script>

<style scoped>
.navbar-image {
  height: 4rem;
  width: 4rem;
  object-fit: contain;
}
</style>
