//Vue
import { createApp } from 'vue'
import App from './App.vue'

//Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faThumbsUp, faComment, faShare)

//Components
import SignUp from "@/components/SignUp"
import SignIn from "@/components/SignIn"
import Navbar from "@/components/Navbar"
import Profile from "@/components/Profile"
import Post from "@/components/Post"
import Comment from "@/components/Comment"

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('Navbar',Navbar)
  .component('SignUp',SignUp)
  .component('SignIn',SignIn)
  .component('Profile',Profile)
  .component('Post',Post)
  .component('Comment',Comment)

  .mount('#app')
