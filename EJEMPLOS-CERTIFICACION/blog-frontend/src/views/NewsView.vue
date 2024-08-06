<template>
  <div class="default-layout">
    <Navbar
      title="Vista de Novedades"
      logo="https://st2.depositphotos.com/1768926/10934/v/450/depositphotos_109347560-stock-illustration-water-wave-logo-template.jpg"
      :showLinks="true"
    />
    <!--  -->
    <main class="h-100">
      <!-- TÍTULO -->
      <h1>{{ title }}</h1>
      <!-- FECHA -->
      <p>{{ date }}</p>
      <!-- AUTOR -->
      <div>
        <img :src="avatar" alt="" class="avatar" /> <span>{{ user_name }}</span>
      </div>
      <!-- CONTENIDO -->
      <p>{{ description }}</p>
      <!-- IMAGEN -->
      <img :src="image" alt="" />
      <!-- CONTENIDO -->
      <p>{{ description }}</p>
    </main>
    <!--  -->
    <FooterComponent
      title="Gracias por elegirnos"
      logo="https://st2.depositphotos.com/1768926/10934/v/450/depositphotos_109347560-stock-illustration-water-wave-logo-template.jpg"
    />
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  name: "NewsView",
  components: {
    Navbar,
    FooterComponent,
  },
  data() {
    return {
      title: "",
      date: "",
      description: "",
      image: "",
      avatar: "",
      user_name: "",
    };
  },
  methods: {
    async getNewById(id) {
      const { data } = await axios.get("/data/novedades.json");
      const filteredNew = data.find((post) => Number(post.id) == Number(id));
      
      this.title = filteredNew.title;
      this.date = filteredNew.date;
      this.description = filteredNew.description;
      this.image = filteredNew.image;
      this.avatar = filteredNew.user.avatar;
      this.user_name = filteredNew.user.user_name;
    },
  },
  async created() {
    const postId = this.$route.params.id;
    this.getNewById(postId);
  },
};
</script>

<style scoped></style>
