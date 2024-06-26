<template>
  <div>
    <form>
      <label>Nombre: </label>
      <input v-model="formulario.name" />
      <br />
      <label>Cuéntanos sobre tu experiencia: </label>
      <textarea v-model="formulario.comentario"></textarea>
    </form>
    <p>{{ dato1 }}</p>
    <p>{{ dataCheckbox }}</p>
    <p>

      Lo que escribo en objeto:
      {{ formulario }}
    </p>
  </div>
</template>

<script>
export default {
  name: "TextAreaInput",
  data() {
    return {
      dato1: "Este es el dato1",
      dataCheckbox:[],
      formulario: {
        name: "",
        comentario: "",
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
