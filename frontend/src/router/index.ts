import {createRouter, createWebHistory} from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import SignUpView from '@/views/SignUpView.vue'
import SignInView from '@/views/SignInView.vue'
import PostsView from '@/views/PostsView.vue'
import ProfileView from '@/views/ProfileView.vue'
import NotFoundView from "@/views/NotFoundView.vue"


export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home'
      }
    }, {
      path: '/signup',
      name: 'signup',
      component: SignUpView,
      meta: {
        title: 'Signup'
      }
    }, {
      path: '/signin',
      name: 'signin',
      component: SignInView,
      meta: {
        title: 'Signin'
      }
    }, {
      path: '/posts',
      name: 'posts',
      component: PostsView,
      meta: {
        title: 'Posts'
      }
    }, {
      path: '/profile/:name',
      name: 'profile',
      component: ProfileView,
      meta: {
        title: 'Profile'
      },
      props: true
    }, {
      path: '/:pathMatch(.*)',
      name: 'NotFound',
      component: NotFoundView,
      meta: {
        title: ' 404 - Not Found'
      },
      props: true
    }
  ]
})

router.afterEach((to) => {
  document.title = to.meta.title.toString()
})

