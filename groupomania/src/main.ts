//Vue
import {createApp} from 'vue'
import App from '@/App.vue'
import {router} from './router'

//Fontawesome
// import {library} from '@fortawesome/fontawesome-svg-core'
// import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
// import {faComment, faShare, faThumbsUp} from '@fortawesome/free-solid-svg-icons'


//Components
import SignUp from "@/components/SignUpCompo.vue"
import SignIn from "@/components/SignInCompo.vue"
import Navbar from "@/components/NavbarCompo.vue"
import Profile from "@/components/ProfileCompo.vue"
import Post from "@/components/PostCompo.vue"
import Comment from "@/components/CommentCompo.vue"

// library.add(faThumbsUp, faComment, faShare)

createApp(App)
  .use(router)
  // .component('font-awesome-icon', FontAwesomeIcon)
  .component('Navbar',Navbar)
  .component('SignUp',SignUp)
  .component('SignIn',SignIn)
  .component('Profile',Profile)
  .component('Post',Post)
  .component('Comment',Comment)
  .mount('#app')
