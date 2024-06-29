<template>
  <div class="velse">
    <h2>V-ELSE</h2>
    <label for="">Quien es este pokemon?</label>
    <input v-model="answer" type="text" name="answer" id="" />
    <br />

    <br />
    <!-- Si es truthy se muestra  -->
    <img
      v-if="answer === 'Pikachu'"
      src="https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2018/05/pikachu.jpg"
      alt=""
    />
    <!-- Si es falsie se muestra  -->
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOZFZP1Nzx5e4lBwTECqEo4BmtDzR46wnXWg&s"
      alt=""
      v-else
    />
  </div>
</template>

<script>
export default {
  name: "ElseComponent",
  data() {
    return {
      answer: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 200px;
  height: 200px;
  object-fit: contain;
}
</style>
