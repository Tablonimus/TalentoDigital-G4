<template>
  <div class="d-flex justify-content-center text-white">
    <!-- Crear Pokemon -->
    <form
      @submit.prevent="
        createPokemon({ name: newPokemon.name, image: newPokemon.image })
      "
      class="w-25 border p-4 rounded bg-danger"
    >
      <h3>Crear Pokemon</h3>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Nombre</label>
        <input
          v-model="newPokemon.name"
          type="text"
          class="form-control"
          id="name"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Imagen</label>
        <input
          v-model="newPokemon.image"
          type="text"
          class="form-control"
          id="image"
        />
      </div>

      <button type="submit" class="btn btn-warning text-white fw-bold">
        Crear Pokemon
      </button>
    </form>
    <!-- Editar Pokemon -->
    <form
      @submit.prevent="
        editPokemon({
          id: editedPokemon.id,
          name: editedPokemon.name,
          image: editedPokemon.image,
        })
      "
      class="w-25 border p-4 rounded bg-danger"
    >
      <h3>Editar Pokemon</h3>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">ID existente</label>
        <input
          v-model="editedPokemon.id"
          type="text"
          class="form-control"
          id="name"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Nombre</label>
        <input
          v-model="editedPokemon.name"
          type="text"
          class="form-control"
          id="name"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Imagen</label>
        <input
          v-model="editedPokemon.image"
          type="text"
          class="form-control"
          id="image"
        />
      </div>

      <button type="submit" class="btn btn-warning text-white fw-bold">
        Editar Pokemon
      </button>
    </form>
    <!-- Eliminar Pokemon -->
    <div class="w-25 border p-4 rounded bg-danger d-flex-col">
      <form @submit.prevent="deletePokemonById(pokemonToDelete)" class="mb-2">
        <h3>Eliminar Pokemon</h3>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Por id</label>
          <input
            v-model="pokemonToDelete"
            type="text"
            class="form-control"
            id="name"
            placeholder="Indique un id válido..."
          />
        </div>

        <button type="submit" class="btn btn-warning text-white fw-bold">
          Eliminar Pokemon
        </button>
      </form>
      <form @submit.prevent="deletePokemonByName(pokemonToDeleteByName)">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Por nombre</label>
          <input
            v-model="pokemonToDeleteByName"
            type="text"
            class="form-control"
            id="name"
            placeholder="Indique un nombre válido..."
          />
        </div>

        <button type="submit" class="btn btn-warning text-white fw-bold">
          Eliminar Pokemon
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AdminView",
  data() {
    return {
      newPokemon: {
        name: "",
        image: "",
      },
      editedPokemon: { id: "", name: "", image: "" },

      pokemonToDelete: "",
      pokemonToDeleteByName: "",
    };
  },

  methods: {
    ...mapActions([
      "createPokemon",
      "editPokemon",
      "deletePokemonById",
      "deletePokemonByName",
    ]),
  },
};
</script>
