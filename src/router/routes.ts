import type { RouteRecordRaw } from 'vue-router'

const routes: Readonly<RouteRecordRaw[]> = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/home/home.vue')
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    name: 'user',
    path: '/user',
    component: () => import('@/views/user/user.vue')
  },
  {
    name: 'dictionary',
    path: '/dictionary',
    component: () => import('@/views/dictionary/dictionary.vue')
  },
  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

export default routes