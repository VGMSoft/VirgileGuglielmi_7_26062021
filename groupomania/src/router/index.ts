import {createRouter, createWebHistory} from 'vue-router'

import Home from '@/views/HomeView.vue'
import Posts from '@/views/PostsView.vue'
import Auth from '@/views/AuthView.vue'
import Profile from '@/views/ProfileView.vue'
import NotFound from '@/views/NotFoundView.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home'
      }
    }, {
      path: '/auth',
      name: 'auth',
      component: Auth,
      meta: {
        title: 'Auth'
      }
    }, {
      path: '/posts',
      name: 'posts',
      component: Posts,
      meta: {
        title: 'Posts'
      }
    }, {
      path: '/profile/:name',
      name: 'profile',
      component: Profile,
      meta: {
        title: 'Profile'
      },
      props: true
    }, {
      path: '/:pathMatch(.*)',
      name: 'NotFound',
      component: NotFound,
      meta: {
        title: ' 404 Not Found'
      },
      props: true
    }
  ]
})

router.afterEach((to) => {
  document.title = to.meta.title.toString()
})

