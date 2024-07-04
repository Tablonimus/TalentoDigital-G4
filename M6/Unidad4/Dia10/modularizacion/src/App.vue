<template>
  <div id="app">
    <HeaderComponent />
    <HeroComponent />
    <SectionComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import HeroComponent from "./components/HeroComponent.vue";
import SectionComponent from "./components/SectionComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    HeroComponent,
    SectionComponent,
    FooterComponent,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  background-color: gray;
  height: 100vh;
}
</style>
