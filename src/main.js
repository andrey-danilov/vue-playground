import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import HomePage from "@/pages/HomePage";
import store from "@/store";

Vue.config.productionTip = false

const routes = [
  { path: '/', name: 'home', component: HomePage },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.use(VueRouter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
