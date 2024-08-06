<template>
  <router-view />
</template>

<style>
.default-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #15af5c;
}

/* COMPONENTE CARD */
.news-card {
  height: 15rem;
  width: 15rem;
  border: 1px solid black;
  border-radius: 15px;
  background-color: antiquewhite;
}
.avatar {
  object-fit: cover;
  height: 3rem;
  width: 3rem;
  border-radius: 100%;
}
.post-image-small {
  object-fit: cover;
  height: 5rem;
  width: 100%;
  /* border-radius: 100%; */
}

/* -------------- */
</style>
