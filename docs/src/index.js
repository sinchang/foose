import Vue from 'vue'
import App from './views/App.vue'
import router from './router'
import './components'
import Foose from '../../src/index'

console.log(Foose)

Vue.use(Foose)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
