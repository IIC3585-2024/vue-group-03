import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/CategoryView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/category/:category',
    name: 'Category',
    component: Category,
    props: true,
  },
  {
    path: '/:category/:articleTitle',
    name: 'Article',
    component: () => import('../views/ArticleView.vue'),
    props: true,
  },
  {
    path: '/search/:searchQuery',
    name: 'Search',
    component: () => import('../views/SearchView.vue'),
    props: true,
  },
];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})


export default router
