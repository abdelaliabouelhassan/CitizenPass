import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    meta: {
      title: 'home'
    },
    path: '/',
    name: 'home',
    component: () => import('@/views/Index.vue'),
  },
  { path: '/:pathMatch(.*)*', redirect: '/' } // Catch-all route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})


export default router;