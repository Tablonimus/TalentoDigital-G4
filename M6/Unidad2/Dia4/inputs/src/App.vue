<template>
  <SelectInput />
  <hr />
  <RatioInput />
  <hr />
  <CheckboxInput />
  <hr />
  <TextAreaInput />
</template>

<script>
import SelectInput from "./components/SelectInput.vue";
import RatioInput from "./components/RatioInput.vue";
import CheckboxInput from "./components/CheckboxInput.vue";
import TextAreaInput from "./components/TextAreaInput.vue";

export default {
  name: "App",
  components: {
    SelectInput,
    RatioInput,
    CheckboxInput,
    TextAreaInput,
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

ul {
  list-style: none;
}
</style>
