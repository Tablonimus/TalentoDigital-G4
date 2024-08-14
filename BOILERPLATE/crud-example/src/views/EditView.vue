<template>
  <div class="d-flex justify-content-center text-white">
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
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "EditView",
  data() {
    return {
      editedPokemon: { id: "", name: "", image: "" },
    };
  },
  computed: {
    ...mapState(["pokemonsArray"]),
  },

  methods: {
    ...mapActions(["editPokemon"]),
  },

  async created() {
    const urlParam = this.$route.params.id;

    const foundPokemon = this.pokemonsArray.find(
      (pokemon) => pokemon.id === urlParam
    );

    this.editedPokemon = foundPokemon;
  },
};
</script>
