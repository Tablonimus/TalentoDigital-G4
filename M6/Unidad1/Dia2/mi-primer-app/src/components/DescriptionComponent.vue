<template>
  <section>
    <h3>{{title}}</h3>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro fugit
      veritatis saepe asperiores quisquam pariatur ipsam dignissimos molestias
      voluptatibus illo repellendus, neque inventore perferendis distinctio
      maiores repudiandae tempora facere voluptatem.
    </p>
  </section>
</template>

<script>
export default {
  name: "DescriptionComponent",
  props: {
    title: String,
  },
};
</script>

<style scoped>
h3 {
  background-color: red;
}
</style>
