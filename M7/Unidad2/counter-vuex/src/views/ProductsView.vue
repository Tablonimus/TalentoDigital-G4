<template>
  <div class="products">
    <h1>Productos disponibles:</h1>
    <div class="cards-container">
      <div
        class="product-card"
        :key="index"
        v-for="(product, index) of $store.state.products"
      >
        <h3>{{ product.nombre }}</h3>
        <div>
          <p>
            {{ product.descripcion.slice(0, 50) }}...
            <router-link :to="`/productos/${product.id}`">
              Ver mas...</router-link
            >
          </p>
          <span>${{ product.precio }}</span>
        </div>
      </div>
      <router-link to="/">Volver al inicio</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductsView",
};
</script>
<style scoped>
.cards-container {
  column-count: 3; /* Number of columns */
  column-gap: 15px; /* Space between columns */
  width: 100%; /* Adjust container width as needed */
  margin: 0 auto; /* Center the container */
}
.product-card {
  break-inside: avoid;
  height: 10rem;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
  padding: 10px;
  margin: 0 0 1em 0;
}
</style>
