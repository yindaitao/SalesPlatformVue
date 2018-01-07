// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../src/assets/font-awesome/css/font-awesome.min.css'
import '../src/assets/simple-line-icons/simple-line-icons.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../src/assets/bootstrap-switch/css/bootstrap-switch.min.css'

import '../node_modules/bootstrap/dist/js/bootstrap.min'

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
