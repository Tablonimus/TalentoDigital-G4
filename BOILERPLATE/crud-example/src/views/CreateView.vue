<template>
  <div class="d-flex justify-content-center text-white">
    <form
      @submit.prevent="createPokemon({ name, image })"
      class="w-25 border p-4 rounded bg-danger"
    >
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Nombre</label>
        <input v-model="name" type="text" class="form-control" id="name" />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Imagen</label>
        <input v-model="image" type="text" class="form-control" id="image" />
      </div>

      <button type="submit" class="btn btn-warning text-white fw-bold">
        Crear Pokemon
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CreateView",
  data() {
    return {
      name: "",
      image: "",
    };
  },

  methods: {
    ...mapActions(["createPokemon"]),
  },
};
</script>
