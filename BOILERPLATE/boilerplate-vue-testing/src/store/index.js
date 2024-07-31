import axios from "axios";
import { createStore } from "vuex";
import router from "@/router";

export default createStore({
  state: {
    loggedUser: null, //=> Estado inicial. => si se inicia sesión esto es un objeto usuario
  },
  mutations: {
    setLoggedUser(state, userData) {
      state.loggedUser = userData;
    },
  },
  actions: {
    async login(context, userDataInput) {
      try {
        /* aca hago la lógica del inicio de sesión */
        const response = await axios.get("/data/users.json"); //=> get a nuestro propio puerto
        /* Si te llega un arary de usuarios */
        const users = response.data;
        const loggedUser = users.find(
          (user) =>
            user.user_name === userDataInput.user &&
            user.password === userDataInput.password
        );

        if (loggedUser) {
          context.commit("setLoggedUser", loggedUser);
          router.push("/home");
        } else {
          alert("Credenciales incorrectas");
        }

        
      } catch (error) {
        alert(error.message);
      }
    },
  },
});

/* Si te llega un user como objeto, porque es solo un usuario */
// const user = response.data;
// const loggedUser =
//   user.user_name === userDataInput.user &&
//   user.password === userDataInput.password
//     ? user
//     : false;
/* ------------------------------------ */
