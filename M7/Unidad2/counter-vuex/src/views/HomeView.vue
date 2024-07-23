<template>
  <div class="home">
    <header>
      <h1>Bienvenido a la verdulieria online</h1>
    </header>
    <section>
      Contamos con {{ $store.state.products.length }} productos en nuestra
      tienda.

      <router-link to="/productos"><button>Ver todos</button></router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
