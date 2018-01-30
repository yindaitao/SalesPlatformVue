import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/Models/Login'
import Platform from '@/Models/Platform'
import cookie from '../Api/cookie'

import SalesOrderList from '@/models/SalesOrderList'

//插件
Vue.use(Router)

let routerObj = new Router({
  mode: 'history',
  hashbang: false,
  history: true,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        authorization: false
      }
    },
    {
      path: '/Platform',
      name: 'Platform',
      component: Platform,
      meta: {
        authorization: true
      },
      children: [
        {
          path: '/SalesOrderList',
          name: 'SalesOrderList',
          component: SalesOrderList,
          meta: {
            authorization: true
          }
        }
      ]
    }
  ]
})

/*
  导航钩子
*/
routerObj.beforeEach((to, from, next) => {
  console.log(`<============ ${to.name} =================>`)
  if (cookie.login === false && (to.meta.authorization === undefined || to.meta.authorization === true)) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default routerObj
