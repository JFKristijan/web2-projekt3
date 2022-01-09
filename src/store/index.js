import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0,
  },
  mutations: {
    increaseCounter(state) {
      state.counter++;
    },
  },
  actions: {},
  modules: {},
});
