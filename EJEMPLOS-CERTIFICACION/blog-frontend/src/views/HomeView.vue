<template>
  <div class="default-layout">
    <Navbar
      title="Vista de Inicio"
      logo="https://st2.depositphotos.com/1768926/10934/v/450/depositphotos_109347560-stock-illustration-water-wave-logo-template.jpg"
      :showLinks="true"
    />
    <!--  -->
    <main class="h-100">
      <!-- SECTION 1 NOVEDADES -->
      <section>
        <h2>Novedades</h2>
        <div class="news-container">
          <PostCardSmall
            :key="index"
            v-for="(post, index) in news"
            :post="post"
          />
        </div>
      </section>
      <!-- SECTION 2 POPULARES -->
      <section>
        <h2>Populares</h2>
        <div class="news-container">
          <PostCardSmall
            class="news-card"
            :key="index"
            v-for="(post, index) in populars"
            :post="post"
          />
        </div>
      </section>
      <!-- SECTION 3 CATEGORIAS -->
      <section>
        <h2>Categorias</h2>
        <div class="news-container">
          <CategoryCard
            :key="index"
            v-for="(category, index) in categories"
            :category="category"
          />
        </div>
      </section>
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
import PostCardSmall from "@/components/PostCardSmall.vue";
import CategoryCard from "@/components/CategoryCard.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    FooterComponent,
    PostCardSmall,
    CategoryCard,
  },
  data() {
    return {
      news: [],
      populars: [],
      categories: [],
    };
  },

  methods: {
    async getNews() {
      try {
        const { data } = await axios.get("/data/novedades.json"); //=> get a nuestro propio puerto
        this.news = data; //Seteo el estado local de mi componente
      } catch (error) {
        alert(error.message);
        console.log(error);
      }
    },
    async getPopulars() {
      try {
        const { data } = await axios.get("/data/populares.json"); //=> get a nuestro propio puerto
        this.populars = data; //Seteo el estado local de mi componente
      } catch (error) {
        alert(error.message);
        console.log(error);
      }
    },
    async getCategories() {
      try {
        const { data } = await axios.get("/data/categories.json"); //=> get a nuestro propio puerto
        this.categories = data; //Seteo el estado local de mi componente
      } catch (error) {
        alert(error.message);
        console.log(error);
      }
    },
  },

  async created() {
    this.getNews();
    this.getPopulars();
    this.getCategories();
  },
};
</script>

<style scoped>
.news-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}
</style>
