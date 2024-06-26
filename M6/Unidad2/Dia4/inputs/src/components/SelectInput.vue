<template>
  <select v-model="letra">
    <option disabled value="">Seleccione una letra...</option>
    <option value="a">A</option>
    <option value="b">B</option>
    <option value="c">C</option>
    <option value="d">D</option>
    <option value="e">E</option>
    <option value="f">F</option>
  </select>

  <p>La letra seleccionada es: {{ letra }}</p>
</template>

<script>
export default {
  name: "SelectInput",
  data() {
    return {
      letra: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
