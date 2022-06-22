import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import storeData from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(Vuex)
Vue.use(VueSweetalert2)
const store = new Vuex.Store(storeData)

Vue.config.productionTip = false
Vue.prototype.$hostname = "http://s-laravel.test";
Vue.prototype.$rupiah = (value) => {return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(value);}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
