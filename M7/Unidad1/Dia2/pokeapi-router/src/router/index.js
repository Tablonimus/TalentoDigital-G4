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
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
