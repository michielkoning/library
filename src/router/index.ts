import HomeView from '@/views/HomeView.vue'
import ScrollSpyView from '@/views/ScrollSpyView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    component: HomeView
  },{
    path: '/scroll-spy',
    component: ScrollSpyView
  }],
})

export default router
