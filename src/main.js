import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import { rtdbPlugin } from "vuefire";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import Listar from "@/templates/cadastros/Listar.vue";
import Editar from "@/templates/cadastros/Editar.vue";
import Excluir from "@/templates/cadastros/Excluir.vue";
import axios from 'axios';
import VueTheMask from 'vue-the-mask'
import Helper from './helper'
import VueToastr2 from 'vue-toastr-2'
import 'vue-toastr-2/dist/vue-toastr-2.min.css'
window.toastr = require('toastr');

const config = {
  apiKey: "AIzaSyBjFP7LihsrKjswi44jGF2Xa_Nhb3jK_20",
  authDomain: "erp-wikilore.firebaseapp.com",
  databaseURL: "https://erp-wikilore.firebaseio.com",
  projectId: "erp-wikilore",
  storageBucket: "erp-wikilore.appspot.com",
  messagingSenderId: "284366799914",
  appId: "1:284366799914:web:57046071f245a954"
};

const app = firebase.initializeApp(config);

Vue.prototype.$db = app.database();
Vue.prototype.$auth = app.auth();
Vue.prototype.$http = axios;
// Vue.prototype.$urlApi = 'http://localhost:8080/api';
Vue.prototype.$urlApi = 'https://erp-api-bruno.herokuapp.com/api';
Vue.prototype.$helper = new Helper();

Vue.use(rtdbPlugin);
Vue.use(VueToastr2);
Vue.use(VueTheMask);

Vue.config.productionTip = false;

Vue.component("Listar", Listar);
Vue.component("Editar", Editar);
Vue.component("Excluir", Excluir);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
