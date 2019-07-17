import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  router,
  methods: {},
  template: '<App/>',
  components: {
    App
  }
})
