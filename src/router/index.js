import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMovies from '../components/AppMovies'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/movies'
  },
  {
    path: '/movies',
    name: 'Movies',
    component: AppMovies
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
