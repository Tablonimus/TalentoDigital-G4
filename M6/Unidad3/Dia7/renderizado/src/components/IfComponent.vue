<template>
  <div class="vif">
    <h2>V-IF</h2>
    <label for="">Mostrar con v-if</label>
    <input v-model="showSpan" type="checkbox" name="showSpan" id="" />
    <br />
    <span v-if="showSpan">Harry Houdini</span>
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
