// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

import store from './vuex/store'
// import store from './store'
// import store from './vuex'

// custom funcs
import base from './base'
// js libs
import $ from 'jquery'
import axios from 'axios'

Vue.use(base)
Vue.prototype.$ = $
Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // vue lifecycle hooks:
  // beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, beforeDestroy, destroyed
  created: function () {
    console.info('hook: vue instance created.')
  },
  updated: function () {
    console.info('hook: virtual DOM re-render and patch.')
  }
})
