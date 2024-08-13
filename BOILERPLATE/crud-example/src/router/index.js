import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "@/store";

/* EJECUTO UNA ACCIÓN DEL STORE ANTES QUE INICIE LA APP CON DISPATCH*/
store.dispatch("getPokemons");
/* --------------------------------------------------------------- */

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/crear",
    name: "create",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CreateView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
