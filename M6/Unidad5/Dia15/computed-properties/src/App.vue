<template>
  <div id="App">
    <input placeholder="nombre" type="text" v-model="nombre" />
    <br />
    <input placeholder="segundoNombre" type="text" v-model="segundoNombre" />
    <br />
    <input placeholder="apellido" type="text" v-model="apellido" />
    <br />
    <input placeholder="calle" type="text" v-model="calle" />
    <br />
    <input placeholder="numero" type="text" v-model="numero" />
    <br />
    <input placeholder="ciudad" type="text" v-model="ciudad" />
    <br />
    <input placeholder="region" type="text" v-model="region" />
    <br />
    <p>Nombre completo: {{ nombreCompleto }}</p>
    <p>Dirección: {{ direccionCompleta }}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      nombre: "",
      segundoNombre: "",
      apellido: "",
      calle: "",
      numero: "",
      ciudad: "",
      region: "",
    };
  },
  methods: {},
  computed: {
    nombreCompleto() {
      return `${this.nombre} ${this.segundoNombre} ${this.apellido}`;
    },
    direccionCompleta() {
      const ciudad = this.ciudad || " ";

      return `${this.calle} N°${this.numero}, ${
        ciudad[0].toUpperCase() + ciudad.slice(1)
      }, ${this.region}.`;
      
    },
  },
};
</script>

<style></style>
