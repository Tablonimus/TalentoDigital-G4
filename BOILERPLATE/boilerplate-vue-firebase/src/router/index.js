import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import store from "@/store";

const routes = [
  {
    /* Ruta por defecto */
    path: "/",
    redirect: { path: "/login" }, // redireccionar a una ruta por default
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
    meta: {
      isAuthRequired: true,
    },
  },
  {
    path: "/contacto",
    name: "contacto",
    component: () => import("../views/AboutView.vue"), //lazy-load
    meta: {
      isAuthRequired: true,
    },
  },
  {
    path: "/perfil",
    name: "perfil",
    component: () => import("../views/ProfileView.vue"), //lazy-load
    meta: {
      isAuthRequired: true,
    },
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

/* Protección de rutas => GUARDIÁN */
//=> to hace referencia a la ruta a la que vamos
//=> next() ejecuta la accion de que el guardian te deja pasar

router.beforeEach((to, from, next) => {
  if (to.meta.isAuthRequired) {
    // next(); //=> descomentar esta linea para darle descanso al guardián
    if (!store.state.loggedUser) {
      next("/"); //Te redirigo a la ruta raiz si no hay usuario logueado
    } else {
      next(); //Si en el estado global hay un usuario logueado, te envío a la ruta deseada
    }
  } else {
    next(); //Si la ruta a la que voy, no es protegida, voy a esa ruta sin problemas
  }
});

export default router;
