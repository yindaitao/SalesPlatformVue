import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/Models/Login'
import Platform from '@/Models/Platform'

Vue.use(Router)

var routerObj = new Router({
  routes: [
    {
      path: '/',
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

routerObj.beforeEach((to, from, next) => {
  let token = window.localStorage.getItem('currentUserToken')
  if (to.name !== 'Login' && from.name !== null && token === null) {
    next({ path: '/' })
  }
  else {
    next()
  }
})

export default routerObj