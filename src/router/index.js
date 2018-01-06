import Vue from 'vue'
import Router from 'vue-router'
import DefaultPage from '@/components/DefaultPage'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Platform from '@/components/Platform'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DefaultPage',
      component: DefaultPage
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Platform',
      name: 'Platform',
      component: Platform
    }
  ]
})
