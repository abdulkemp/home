import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'loginRegister',
    component: () => import ('../views/LoginRegisterView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import ('../views/AdminView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import ('../views/ContactView.vue')
  },
  {
    path: '/spin',
    name: 'spin',
    component: () => import ('../views/SpinnerView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import ('../views/CartView.vue')
  },
  {
    path: '/products/:id',
    name: 'single',
    component: function () {
      return import('../views/SingleView.vue')
    },
    props: true
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router