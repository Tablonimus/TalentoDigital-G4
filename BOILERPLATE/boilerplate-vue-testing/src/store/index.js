import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    loggedUser: "",
  },
  mutations: {
    setLoggedUser(state, userData) {
      state.loggedUser = userData;
    },
  },
  actions: {
    async login(context, userDataInput) {
      /* aca hago la lógica del inicio de sesión */
      const response = await axios.get("/data/users.json"); //=> get a nuestro propio puerto

      /* Si te llega un arary de usuarios */
      const users = response.data;
      const loggedUser = users.find(
        (user) =>
          user.user_name === userDataInput.user &&
          user.password === userDataInput.password
      );

      /* Si te llega un user como objeto, porque es solo un usuario */
      // const user = response.data;
      // const loggedUser =
      //   user.user_name === userDataInput.user &&
      //   user.password === userDataInput.password
      //     ? user
      //     : false;

      if (loggedUser) {
        context.commit("setLoggedUser", loggedUser);
        window.location.href = "/home";
      } else {
        alert("Credenciales incorrectas");
      }
    },
  },
});
