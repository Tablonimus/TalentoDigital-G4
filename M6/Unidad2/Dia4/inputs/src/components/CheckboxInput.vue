<template>
  <form>
    <label>Lenguajes de programación que domina: </label>
    <ul>
      <li>
        <input
          v-model="lenguajes"
          name="lenguajes"
          type="checkbox"
          value="HTML"
        />
        HTML
      </li>
      <li>
        <input
          v-model="lenguajes"
          name="lenguajes"
          type="checkbox"
          value="CSS"
        />
        CSS
      </li>
      <li>
        <input
          v-model="lenguajes"
          name="lenguajes"
          type="checkbox"
          value="Vue"
        />
        Framework VUE.js
      </li>
    </ul>
    <p>Lenguajes seleccionados: {{ lenguajes }}</p>
  </form>
</template>

<script>
export default {
  name: "CheckboxInput",
  data() {
    return {
      lenguajes:
        [] /* 🚨🚨✅ EL ESTADO INICIAL QUE MANEJAN LOS CHECKBOX DEBE SER UN ARRAY SI O SI*/,
    };
  },
};
</script>

<style scoped></style>
