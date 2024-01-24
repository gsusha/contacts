import { createRouter, createWebHistory } from 'vue-router'
import {useUserStore} from "@/stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/AuthView.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  const { isAuthenticated } = useUserStore();

  if (to.meta.requiresAuth && !isAuthenticated) {
    return { name: 'auth'}
  }
})

export default router
