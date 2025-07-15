// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { startLoading, finishLoading } from '@/services/loader'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/404Views.vue'),
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/PhotoViews.vue'),
    },
    {
      path: '/view/staff',
      name: 'staff',
      component: () => import('../views/StaffViews.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactViews.vue'),
    },
    {
      path: '/view/contant/:id',
      name: 'content',
      props: true,
      component: () => import('../views/ContentViews.vue'),
    },
    {
      path: '/view/news',
      name: 'news',
      props: true,
      component: () => import('../views/NewsViews.vue'),
    },
    {
      path: '/view/announcement',
      name: 'announcement',
      props: true,
      component: () => import('../views/AnnouncementViews.vue'),
    },
    {
      path: '/view/event',
      name: 'event',
      props: true,
      component: () => import('../views/EventViews.vue'),
    },
    {
      path: '/view/faq',
      name: 'faq',
      props: true,
      component: () => import('../views/FaqViews.vue'),
    },
    // DitaelPeg
    {
      path: '/view/news/:url',
      name: 'newdetail',
      props: true,
      component: () => import('@/detail/NewDetail.vue'),
    },
  ],

  // 👇 Scrollni boshqarish qismi
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

// Loader boshlanishi
router.beforeEach((to, from, next) => {
  startLoading()
  next()
})

// Loader tugashi
router.afterEach(() => {
  finishLoading()
})

export default router
