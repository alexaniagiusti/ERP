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

Vue.use(rtdbPlugin);
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
