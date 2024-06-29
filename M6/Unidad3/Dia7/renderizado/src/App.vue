<template>
  <section>
    <IfComponent />
  </section>
  <section>
    <ShowComponent />
  </section>
  <section>
    <ElseComponent />
  </section>
  <section>
    <ForComponent />
  </section>
</template>

<script>
import IfComponent from "./components/IfComponent.vue";
import ShowComponent from "./components/ShowComponent.vue";
import ElseComponent from "./components/ElseComponent.vue";
import ForComponent from "./components/ForComponent.vue";

export default {
  name: "App",
  components: {
    IfComponent,
    ShowComponent,
    ElseComponent,
    ForComponent
  },
};
</script>

<style>
body {
  background-color: #2c3e50;
  height: 100vh;
}
section {
  border: 1px solid black;
}
</style>
