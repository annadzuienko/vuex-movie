import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import 'es6-promise/auto';
import router from "./router";
import axios from "axios";

Vue.use(Vuex);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
