import {createWebHistory, createRouter} from 'vue-router'

import Home from '@/views/Home.vue'
import Posts from '@/views/Posts.vue'
import Auth from '@/views/Auth.vue'
import Profile from '@/views/Profile.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/auth',
      name: 'auth',
      component: Auth
    }, {
      path: '/profile',
      name: 'profile',
      component: Profile
    }, {
      path: '/posts',
      name: 'posts',
      component: Posts
    }

  ]
})
export default router
