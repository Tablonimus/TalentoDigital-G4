import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// http://localhost:8080/about
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/services",
    name: "services",
    component: () => import("../views/ServicesView.vue"),
  },
  {
    path: "/posts/:id",
    name: "posts",
    component: () => import("../views/BlogView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
