<template>
  <div>
    <nav>
      <span @click="componenteARenderizar = 'HomeComponent'">Home</span>
      <span @click="componenteARenderizar = 'ProductosComponent'"
        >Productos</span
      >
    </nav>

    <main>
      <component
        :is="componenteARenderizar"
      /><!-- is me dirá que componente renderizar    -->
    </main>
    <hr />
    <footer>Este es el footer</footer>
  </div>
</template>

<script>
import HomeComponent from "./components/HomeComponent.vue";
import ProductosComponent from "./components/ProductosComponent.vue";

export default {
  name: "App",
  components: {
    ProductosComponent,
    HomeComponent,
  },
  data() {
    return {
      componenteARenderizar: "HomeComponent", //"NumerosCompents"
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  height: 100px;
  background-color: bisque;
  display: flex;
  align-items: center;
}
</style>
