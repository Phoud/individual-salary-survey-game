// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate';
import VueAutonumeric  from 'vue-autonumeric'
//import Vue2Filters from 'vue2-filters'

//Vue.use(Vue2Filters);
Vue.use(VeeValidate);
Vue.use(VueAutonumeric);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
