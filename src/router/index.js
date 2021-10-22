/*
 * @Author: your name
 * @Date: 2021-09-04 21:10:38
 * @LastEditTime: 2021-10-22 15:34:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \traning\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      title: 'login',
      requireAuth: false
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    meta: {
      title: 'home',
      requireAuth: true
    },
    redirect: '/home/index',
    children: [
      {
        path: '/home/index',
        name: 'index',
        component: () => import(/* webpackChunkName: "show" */ '../views/Index.vue'),
        meta: {
          title: '首页',
          requireAuth: true
        }
      },
      {
        path: '/home/table',
        name: 'table',
        component: () => import(/* webpackChunkName: "show" */ '../views/Table.vue'),
        meta: {
          title: '表格',
          requireAuth: true
        }
      },
      {
        path: '/home/tableSelect',
        name: 'tableSelect',
        component: () => import(/* webpackChunkName: "show" */ '../views/TableSelect.vue'),
        meta: {
          title: '选项卡',
          requireAuth: true
        }
      },
      {
        path: '/home/echarts',
        name: 'echarts',
        component: () => import(/* webpackChunkName: "show" */ '../views/Echarts.vue'),
        meta: {
          title: '图表',
          requireAuth: true
        }
      },
      {
        path: '/home/drop',
        name: 'drop',
        component: () => import(/* webpackChunkName: "show" */ '../views/Drop.vue'),
        meta: {
          title: '拖拽',
          requireAuth: true
        }
      },
      {
        path: '/home/tree',
        name: 'tree',
        component: () => import(/* webpackChunkName: "show" */ '../views/Tree.vue'),
        meta: {
          title: '树结构',
          requireAuth: true
        }
      }
    ]
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, form, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  const requireAuth = to.meta.requireAuth
  if (requireAuth) {
    if (window.sessionStorage.getItem('login')) {
      console.log('已登录,跳转');
      next()
    } else {
      console.log('为登录,回登录页');
      next('/login')
    }
  } else {
    console.log('允许直接访问');
    next()
  }
})
// router.beforeEach((to, form, next) => {
//   if (to.path === '/login' || to.path === '/forgetPassword') {
//     next()
//   } else {
//     if (to.meta.isLogin) {
//       if (to.meta.needSuperLogin && window.localStorage.getExpire('role') === 'super') {
//         next()
//       } else if (to.meta.needSuperLogin && window.localStorage.getExpire("Flag") === 'isLogin') {
//         history.back(0)
//       } else if (window.localStorage.getExpire('Flag') === 'isLogin') {
//         next()
//       } else {
//         next('/login')
//       }
//     } else {
//       next()
//     }
//   }
// })

export default router
