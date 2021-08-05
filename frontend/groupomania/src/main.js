import { createApp } from 'vue'
import App from './App.vue'
import SignUp from "@/components/SignUp"
import SignIn from "@/components/SignIn"
import LogBox from "@/components/LogBox"
import Navbar from "@/components/Navbar"
import Profile from "@/components/Profile"
import Post from "@/components/Post"
import Comment from "@/components/Comment"

createApp(App)
  .component('Navbar',Navbar)
  .component('LogBox',LogBox)
  .component('SignUp',SignUp)
  .component('SignIn',SignIn)
  .component('Profile',Profile)
  .component('Post',Post)
  .component('Comment',Comment)
  .mount('#app')
