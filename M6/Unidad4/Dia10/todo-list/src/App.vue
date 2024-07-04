<template>
  <div id="app">
    <form @submit.prevent="agrearTarea">
      <input v-model="tareaNueva" type="text" />
      <button>Agregar tarea</button>
      <p v-if="error">Debes ingresar una tarea válida</p>
    </form>

    <hr />
    <ul>
      <li :key="index" v-for="(tarea, index) in tareas">
        <label>{{ tarea }}</label>
        <input type="checkbox" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      tareaNueva: "",
      tareas: [],
      error: false,
    };
  },
  methods: {
    agrearTarea() {
      this.error = false;
      if (this.tareaNueva.length > 3) {
        let tarea = this.tareaNueva;
        this.tareas.push(tarea);
        this.tareaNueva = "";
      } else {
        this.error = true;
      }
    },
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

li {
  display: flex;
  align-items: center;
}

p {
  color: red;
}
</style>
