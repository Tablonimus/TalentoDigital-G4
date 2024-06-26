<template>
  <div id="app">
    <h1>Bienvenido a cursos online. Por favor registrese para continuar:</h1>

    <form action="">
      <!-- Input nombre -->
      <label for="nombre">Nombre: </label>
      <input
        placeholder="Ingrese su nombre completo..."
        id="nombre"
        v-model="nombre"
      />
      <!-- Input tel -->
      <label for="telofono">Teléfono: </label>
      <input
        placeholder="Ingrese un telefono válido..."
        id="telefono"
        type="tel"
        v-model="telefono"
      />
    </form>

    <div>
      <h2>Datos ingresados:</h2>
      <ul>
        <li>Nombre: {{ nombre }}</li>
        <li>Teléfono: {{ telefono }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      nombre: "", //Esta variable de estado tomará el valor del input vinculado con model
      telefono: "", //Esta variable de estado tomará el valor del input vinculado con model
    };
  },
};
</script>

<style>
span {
  color: #3fb27f;
}
</style>
