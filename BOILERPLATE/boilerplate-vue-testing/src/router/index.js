import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";

const routes = [
  {
    /* Ruta por defecto */
    path: "/",
    redirect: { path: "/login" }, // redireccionar a unra ruta por default
    name: "default",
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/contacto",
    name: "contacto",
    component: () => import("../views/AboutView.vue"), //lazy-load
  },
  {
    path: "/perfil",
    name: "perfil",
    component: () => import("../views/ProfileView.vue"), //lazy-load
  },
  {
    /* Ruta 404 */
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("../views/404View.vue"), //lazy-load
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
