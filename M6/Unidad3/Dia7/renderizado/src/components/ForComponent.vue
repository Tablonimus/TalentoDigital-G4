<template>
  <div class="vfor">
    <h2>V-FOR</h2>
    <!-- LA KEY DEBE SER UN STRING O NUMERO DE VALOR ÚNICO PARA CADA FOR -->
    <ul>
      <li :key="vocal" v-for="vocal in vocales">Letra iterada=> {{ vocal }}</li>
      <!-- Cada vocal es un string!!! -->
    </ul>

    <ul>
      <li :key="alumno.rut" v-for="alumno in alumnos">
        <img :src="alumno.img" alt="perfil alumno" />
        <p>
          {{ alumno.nombre }} {{ alumno.apellido }} -
          {{ alumno.rut }}
        </p>
      </li>

      <!-- Cada alumno es un objeto!!! por lo tanto, puedo acceder a sus propiedades como nombre, rut y apellido -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "ElseComponent",
  data() {
    return {
      vocales: ["a", "e", "i", "o", "u"],

      alumnos: [
        {
          rut: 123,
          nombre: "Celeste",
          apellido: "Valderrama",
          img: "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-4917-rectangle.jpg?w=624",
        },
        {
          rut: 124,
          nombre: "Roimer",
          apellido: "Rojas",
          img: "https://indierocks.sfo3.cdn.digitaloceanspaces.com/wp-content/uploads/bfi_thumb/nicolas-jaar-v-5hnqf5in97x879z0gqtimm90y89z2by0nt4153ir9td4ji0e7xhg9rblcljq4g.jpg",
        },
      ],
      personajes: [
        {
          id: 1,
          name: "Rick Sanchez",
          status: "Alive",
          species: "Human",
          type: "",
          gender: "Male",
          origin: {
            name: "Earth (C-137)",
            url: "https://rickandmortyapi.com/api/location/1",
          },
          location: {
            name: "Citadel of Ricks",
            url: "https://rickandmortyapi.com/api/location/3",
          },
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",

          url: "https://rickandmortyapi.com/api/character/1",
          created: "2017-11-04T18:48:46.250Z",
        },
        {
          id: 2,
          name: "Morty Smith",
          status: "Alive",
          species: "Human",
          type: "",
          gender: "Male",
          origin: {
            name: "unknown",
            url: "",
          },
          location: {
            name: "Citadel of Ricks",
            url: "https://rickandmortyapi.com/api/location/3",
          },
          image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",

          url: "https://rickandmortyapi.com/api/character/2",
          created: "2017-11-04T18:50:21.651Z",
        },
        {
          id: 3,
          name: "Summer Smith",
          status: "Alive",
          species: "Human",
          type: "",
          gender: "Female",
          origin: {
            name: "Earth (Replacement Dimension)",
            url: "https://rickandmortyapi.com/api/location/20",
          },
          location: {
            name: "Earth (Replacement Dimension)",
            url: "https://rickandmortyapi.com/api/location/20",
          },
          image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",

          url: "https://rickandmortyapi.com/api/character/3",
          created: "2017-11-04T19:09:56.428Z",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  object-fit: cover;
}
ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
li {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: rgba(0, 0, 0, 0.13);
  padding: 2px;
}
</style>
