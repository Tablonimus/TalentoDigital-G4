<template>
  <HelloWorld msg="Welcome to Your Vue.js App" />

  <section id="personas-container">
    <div :key="index" v-for="(persona, index) in personas">
      <PersonaComponent
        titulo="Un titulo más"
        :foto="persona.foto"
        :nombre="persona.nombre"
        :descripcion="persona.descripcion"
        @eliminarPersona="personas.splice(index, 1)"
      />
    </div>
  </section>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import PersonaComponent from "./components/PersonaComponent.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    PersonaComponent,
  },
  data() {
    return {

      personas: [
        {
          foto: "https://avatars.githubusercontent.com/u/499550?v=4",
          nombre: "Evan You",
          descripcion: "Creador de Vue Js",
        },
        {
          foto: "https://i.pinimg.com/736x/0e/37/79/0e37795ee8e704dc004dca922474bca6.jpg",
          nombre: "Calamardo el Hermoso",
          descripcion: "Creador de la rabia",
        },
        {
          foto: "https://media.revistavanityfair.es/photos/60e84a97bb9e71d46fd8d1f4/1:1/w_916,h_916,c_limit/39713.jpg",
          nombre: "Harry Potter",
          descripcion: "Creador de la varita mágica",
        },
      ],
    };
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

#personas-container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  align-items: center;
}
</style>
