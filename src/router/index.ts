import { createRouter, createWebHistory } from 'vue-router'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'
import HomeView from '@/views/HomeView.vue'
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue'
import BooksView from '@/views/BooksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/FireLogin',
      name: 'FireLogin',
      component: FirebaseSigninView,
    },
    {
      path: '/FireRegister',
      name: 'FireRegister',
      component: FirebaseRegisterView,
    },
    {
      path: '/books',
      name: 'books',
      component: BooksView,
    },
  ],
})

export default router
