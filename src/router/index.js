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
  {
    meta: {
      title: 'Pass Check'
    },
    path: '/pass-check',
    name: 'pass-check',
    component: () => import('@/views/PassCheck.vue'),
  },
  {
    meta: {
      title: 'Apply'
    },
    path: '/apply',
    name: 'apply',
    component: () => import('@/views/Apply.vue'),
  },
  {
    meta: {
      title: 'Mint'
    },
    path: '/mint',
    name: 'mint',
    component: () => import('@/views/Mint.vue'),
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