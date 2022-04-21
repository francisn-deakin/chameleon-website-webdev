import Vue from 'vue'
import Router from 'vue-router'
import AboutUs from '@/components/AboutUs'
import TopPage from '@/components/TopPage'
import Register from '@/components/Register'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/about',
      name: 'about',
      component: AboutUs
    },
    {
      path: '/',
      name: 'TopPage',
      component: TopPage
    },
    {
      path: '/register',
      name: 'registr',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
