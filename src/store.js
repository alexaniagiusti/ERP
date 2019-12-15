import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    vueLoad: false,
    user: sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : null,
    itensOrcamento: []
  },
  mutations: {
    setVueLoad(state, status) {
      state.vueLoad = status;
    },
    setUser(state, n) {
			state.user = n;
		},
  },
  actions: {
    addItemOrcamento(stat)
  },
  getters: {
    getUser: state => state.user,
    getToken: state => state.user.token,
    getItensOrcamento: state => state.itensOrcamento
  }
});
