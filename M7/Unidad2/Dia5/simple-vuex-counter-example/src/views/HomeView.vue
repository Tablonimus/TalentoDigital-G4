<template>
  <div class="home">
    <CounterComponent />
    <br />
    <MisteryMessageComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import CounterComponent from "@/components/CounterComponent.vue";
import MisteryMessageComponent from "@/components/MisteryMessageComponent.vue";

export default {
  name: "HomeView",
  components: {
    CounterComponent,
    MisteryMessageComponent,
  },
};
</script>
