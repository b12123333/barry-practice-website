import { createRouter, createWebHashHistory } from 'vue-router'
// import AppHome from '../views/home/Home'
// import AppLogin from '../views/login/login '
// import AppRegister from '../views/register/register '
// import AppShop from '../views/shop/shop '

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home_1" */ '../views/home/Home')
  },
  {
    path: '/shop/:id',
    name: 'shop',
    component: () => import(/* webpackChunkName: "shop_1" */ '../views/shop/shop ')
  },
  {
    path: '/orderconfirmation/:id',
    name: 'orderconfirmation',
    component: () => import(/* webpackChunkName: "orderConfirmation" */ '../views/orderConfirmation/orderConfirmation')
  },
  {
    path: '/CartList',
    name: 'CartList',
    component: () => import(/* webpackChunkName: "CartList" */ '../views/cartList/CartList')
  },
  {
    path: '/orderList',
    name: 'orderList',
    component: () => import(/* webpackChunkName: "orderList" */ '../views/orderList/orderList')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login_1" */ '../views/login/login '),
    beforeEnter (to, from, next) {
      const isLogin = window.localStorage.isLogin
      if (isLogin) {
        next({ name: 'home' })
      } else {
        next()
      }
    }
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register_1" */ '../views/register/register '),
    beforeEnter (to, from, next) {
      const isLogin = window.localStorage.isLogin
      if (isLogin) {
        next({ name: 'home' })
      } else {
        next()
      }
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isLogin = window.localStorage.isLogin
  if (isLogin || to.name === 'login' || to.name === 'register') {
    next()
  } else {
    next({ name: 'login' })
  }
})
export default router
