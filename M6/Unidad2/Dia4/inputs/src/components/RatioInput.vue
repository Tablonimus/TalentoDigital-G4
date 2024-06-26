<template>
  <form>
    <label>¿Cómo calificas el servicio recibido? </label>
    <ul>
      <li>
        <input
          type="radio"
          value="5"
          name="calificacion"
          v-model="calificacion"
        />
        Muy bueno
      </li>
      <li>
        <input
          type="radio"
          value="3"
          name="calificacion"
          v-model="calificacion"
        />
        Bueno
      </li>
      <li>
        <input
          type="radio"
          value="1"
          name="calificacion"
          v-model="calificacion"
        />
        Malo
      </li>
    </ul>
  </form>
  <p>El servicio recibido tiene {{ calificacion }} estrella/s.</p>
</template>

<script>
export default {
  name: "RatioInput",
  data() {
    return {
      calificacion: "...",
    };
  },
};
</script>

<style scoped>

</style>
