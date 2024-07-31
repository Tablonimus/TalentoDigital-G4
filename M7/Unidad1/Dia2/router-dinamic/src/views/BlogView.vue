<template>
  <div>
    <h1>BlogView</h1>
    <h2>{{ tituloEntrada }}</h2>
    <h3>El numero del param es: {{ this.$route.params.id }}</h3>

    <router-link :to="paginar(false)">
      <button>Anterior</button>
    </router-link>

    
    <router-link :to="paginar(true)">
      <button>Siguiente</button>
    </router-link>

    <br />
    <button @click="volverAlInicio">Voler al inicio</button>
  </div>
</template>

<script>
export default {
  name: "BlogView",

  methods: {
    paginar(siguiente) {
      const currentId = parseInt(this.$route.params.id);

      if ((currentId == 10 && siguiente) || (currentId == 1 && !siguiente)) {
        return `/posts/1`;
      }
      if (siguiente) {
        return `/posts/${currentId + 1}`;
      } else {
        return `/posts/${currentId - 1}`;
      }
    },
    volverAlInicio() {
      return this.$router.push(`/`);
    },
  },
  computed: {
    tituloEntrada() {
      const currentId = parseInt(this.$route.params.id);
      return `Post N°${currentId} del blog`;
    },
  },
};
</script>

<style scoped></style>
