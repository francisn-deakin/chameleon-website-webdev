import Vue from 'vue'
import Router from 'vue-router'
import TopPage from '@/components/TopPage'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Portfolio from '@/components/Portfolio'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'TopPage',
      component: TopPage
    },
    {
      path: '/Portfolio',
      name: 'Portfolio',
      component: Portfolio
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
