<template>
  <footer class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          :src="logo"
          alt="Logo"
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
        {{ title }}
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  props: ["title", "logo"],
};
</script>

<style lang="scss" scoped></style>
