import Vue from 'vue'
import App from './App.vue'
import router from './router'
import less from 'less'
Vue.use(less)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
