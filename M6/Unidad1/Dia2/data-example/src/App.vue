<template>
  <header>
    <h1>{{ mainTitle }}</h1>
  </header>
  <section>
    <p>
      {{ description }}
    </p>
    <p>
      {{ myName }} no expliques mas por favor!
    </p>
  </section>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      mainTitle: "Mi data.",
      description: "Mi descripcion es cortita.",
      myName:"Lautaro"
    };
  },
};
</script>
<!-- data(){} es un método que retorna un objeto  -->
<style>
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
