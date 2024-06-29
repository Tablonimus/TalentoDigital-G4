<template>
  <div class="vshow">
    <h2>V-SHOW</h2>
    <label for="">Mostrar con v-show</label>
    <input v-model="showSpan" type="checkbox" name="showSpan" id="" />
    <br />
    <span v-show="showSpan">Harry Houdini</span>
  </div>
</template>

<script>
export default {
  name: "IfComponent",
  data() {
    return {
      showSpan: true,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
