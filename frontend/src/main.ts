//Vue
import {createApp} from 'vue'
import App from '@/App.vue'
import {router} from './router'

//Fontawesome
// import {library} from '@fortawesome/fontawesome-svg-core'
// import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
// import {faComment, faShare, faThumbsUp} from '@fortawesome/free-solid-svg-icons'


//Components
// import SignUpCompo from "@/components/SignUpCompo.vue"
// import SignInCompo from "@/components/SignInCompo.vue"
import Navbar from "@/components/NavbarCompo.vue"
import Profile from "@/components/ProfileCompo.vue"
import Post from "@/components/PostCompo.vue"
import Comment from "@/components/CommentCompo.vue"
import store from "@/store";

// library.add(faThumbsUp, faComment, faShare)

createApp(App)
  .use(router)
  .use(store)
  // .component('font-awesome-icon', FontAwesomeIcon)
  .component('Navbar',Navbar)
  // .component('SignUpCompo',SignUpCompo)
  // .component('SignInCompo',SignInCompo)
  .component('Profile',Profile)
  .component('Post',Post)
  .component('Comment',Comment)
  .mount('#app')
