<template>
  <div class="border d-flex gap-3 align-items-center">
    <img :src="category.imageURL" alt=""  class="avatar"/>
    <span>{{ category.name }}</span>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  props: ["category"],
};
</script>

<style scoped></style>
