<template>
  <div class="home">
    <h1>Lugar: {{ $store.state.country }}</h1>
    <IndicadoresComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import IndicadoresComponent from "../components/IndicadoresComponent.vue";

export default {
  name: "HomeView",
  components: { IndicadoresComponent },
};
</script>
