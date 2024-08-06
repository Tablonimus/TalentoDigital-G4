<template>
  <div class="news-card">
    <router-link :to="`/novedades/${post.id}`">
      <span class="">{{ post.date }}</span>
      <img :src="post.image" alt="" class="post-image-small" />
      <h3 class="fs-6">{{ post.title }}</h3>
      <div>
        <img :src="post.user.avatar" alt="" class="avatar" />
        <span>{{ post.user.user_name }}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PostCardSmall",
  props: ["post"],
};
</script>

<style scoped></style>
