import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/scroll-spy",
      component: () => import("@/views/ScrollSpyView.vue"),
    },
    {
      path: "/form",
      component: () => import("@/views/FormView.vue"),
    },
    {
      path: "/carousel",
      component: () => import("@/views/CarouselView.vue"),
    },
  ],
});

export default router;
