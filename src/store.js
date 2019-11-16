import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    vueLoad: false,
  },
  mutations: {
    setVueLoad(state, status) {
      state.vueLoad = status;
    },
  },
  actions: {}
});
