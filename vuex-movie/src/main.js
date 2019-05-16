import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import 'es6-promise/auto';
import VueRouter from 'vue-router';
import axios from "axios";

Vue.use(Vuex);
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
