import { createRouter, createWebHistory } from "vue-router";

import LoginView from "@/views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/home",
    name: "about",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/pokemon/:id",
    name: "pokemon",
    component: () => import("../views/PokemonDetail.vue"),
    props: () => {
      return {
        nombreRuta: "Ruta de pokemons",
        mensaje: "tenemos un mensaje",
      };
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
