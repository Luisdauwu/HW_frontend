import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarsView from '../views/CarsView.vue'
import LoginView from '../views/LoginView.vue'
import CreateAccountView from '../views/CreateAccountView.vue'
import CarsInventoryView from '../views/CarsInventoryView.vue'
import BuyCarsView from '../views/BuyCarsView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cars',
      name: 'cars',
      component: CarsView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      beforeEnter: (to, from, next) => {
        const isLogin = sessionStorage.getItem("access_token")
        if (isLogin) {
          next("/")
        } else { next() }
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: CreateAccountView,
    },

    {
      path: '/inventory',
      name: 'inventory',
      component: CarsInventoryView,
    },
    {
      path: '/buycars',
      name: 'buycars',
      component: BuyCarsView,
    }
  ]
})

export default router