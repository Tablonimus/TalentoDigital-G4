import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0,
    misteryMessage: "Aún no hay mensaje del día...",
  },
  mutations: {
    setIncrementarContador(state) {
      state.counter++;
    },
    setRestarContador(state) {
      state.counter--;
    },
    setMisteryMessage(state, newMisteryMessage) {
      state.misteryMessage = newMisteryMessage;
    },
  },

  actions: {
    incrementarContador(context) {
      context.commit("setIncrementarContador");
    },
    restarContador(context) {
      context.commit("setRestarContador");
    },
    mostrarNuevoMensaje(context, event) {
      const misteryMessage = event.target.value;
      context.commit("setMisteryMessage", misteryMessage);
    },
  },
});
