import { createStore } from "vuex";
import { auth, signInWithEmailAndPassword } from "../config/firebaseConfig.js";
import router from "@/router/index.js";

export default createStore({
  state: {
    loggedUser: false,
  },
  mutations: {
    setLoggedUser(state, user) {
      state.loggedUser = user;
    },
  },
  actions: {
    async login(context, data) {
      console.log(data);
      try {
        const loginResponse = await signInWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );

        context.commit("setLoggedUser", loginResponse);
        
        router.push("/home");

      } catch (error) {
        console.log("Error en el inicio de sesión", error);
      }
    },
  },
});
