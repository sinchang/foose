import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Foose'
  next()
})

export default router