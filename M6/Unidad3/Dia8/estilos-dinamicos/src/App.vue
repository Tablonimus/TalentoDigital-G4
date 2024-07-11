<template>
  <div id="app">
    <p :style="{ color: colorDeTexto, backgroundColor: colorDeFondo }">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
      repellat corporis earum, alias cumque debitis vel, iusto quaerat ipsum
      ducimus inventore aliquam eos praesentium et cum quos reprehenderit
      quibusdam non.
    </p>

    <br />
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_LUTx0vrRNNUgFckvxc2nbP5Zb1mA7cGYYg&s"
      alt="exampleImage"
      :style="{ width: anchoImagen }"
    />
    <br />
    <input
      type="text"
      :style="{
        color: colorDeTexto,
        backgroundColor: colorDeFondo,
        border: bordeInput,
      }"
    />

    <br />

    <h3 :class="{ textoGrande: isBig, textoSubrayado: isUnderlined }">
      Esto es un h3
    </h3>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      colorDeTexto: "#fff",
      colorDeFondo: "#031020",
      anchoImagen: "10%",
      bordeInput: "dotted",
      isUnderlined: true,
      isBig: true,
    };
  },
};
</script>

<style>
.textoGrande {
  font-size: 35px;
}

.textoSubrayado {
  text-decoration: underline;
}
</style>
