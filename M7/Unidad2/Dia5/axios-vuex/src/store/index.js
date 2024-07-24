import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    country: "Chile",
    dollarPrice: "-", //=> recomiendo que sea un valor falsy asociado al dato de la variable=> NaN
  },

  mutations: {
    setDollarPrice(state, newDollarPrice) {
      state.dollarPrice = newDollarPrice;
    },
  }, //=>parecido a los setters de las clases

  actions: {
    async getIndicadoresEconomicos(context) {
      try {
        const response = await axios.get("https://mindicador.cl/api");
        const newDollarPrice = response.data.dolar.valor;
        context.commit("setDollarPrice", newDollarPrice);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
