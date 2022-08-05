import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/index/index.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about/index.vue')
      },
      {
        path: '/news',
        name: 'news',
        component: () => import('@/views/news/index.vue')
      },
      {
        path: '/product',
        name: 'product',
        component: () => import('@/views/product/index.vue')
      },
      {
        path: '/cooperation',
        name: 'cooperation',
        component: () => import('@/views/cooperation/index.vue')
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
