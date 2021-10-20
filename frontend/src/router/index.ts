import {createRouter, createWebHistory, RouteLocationNormalized} from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import SignUpView from '@/views/auth/SignUpView.vue'
import SignInView from '@/views/auth/SignInView.vue'
import AllPostsView from '@/views/posts/AllPostsView.vue'
import NewPostView from "@/views/posts/NewPostView.vue"
import ProfileView from '@/views/ProfileView.vue'
import NotFoundView from "@/views/NotFoundView.vue"
import OnePostView from "@/views/posts/OnePostView.vue";
import Cookies from "js-cookie";

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
    },
    //auth
    {
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
    },
    //profile
    {
      path: '/profile/',
      name: 'profile',
      component: ProfileView,
      meta: {
        title: 'Profile'
      }
    },
    //posts
    {
      path: '/posts',
      name: 'posts',
      component: AllPostsView,
      meta: {
        title: 'Posts'
      }
    }, {
      path: '/posts/new',
      name: 'newPost',
      component: NewPostView,
      meta: {
        title: 'New Post'
      }
    }, {
      path: '/posts/:id',
      name: 'one posts',
      component: OnePostView,
      meta: {
        title: 'Posts'
      }
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

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  if (to.name === 'signup' || to.name === 'signin' || to.name === 'home') {
    return true
  } else {
    if (Cookies.get('userToken') !== null && Cookies.get('userToken') !== "") {
      return true
    } else {
      // return false
    }
  }
});

