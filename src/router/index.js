import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Login from '../views/LoginView.vue'
import ProductView from '@/views/ProductView.vue'
import ProductFormView from '../views/ProductFormView.vue'
import { useUserStore } from '../stores/user'
import { getStorage } from '../stores/localStorage.js'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/products',
      name: 'list',
      component: ProductView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/form',
      name: 'form',
      component: ProductFormView,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const access_token = getStorage('token')

  if (to.meta.requiresAuth) {
    if (access_token) {
      next()
    } else next({ name: 'login' })
  } else next()
})


export default router
