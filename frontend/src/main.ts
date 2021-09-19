//Vue
import {createApp} from 'vue'
import App from '@/App.vue'
import {router} from './router'

//Bootstrap JS
import 'bootstrap/js/dist/dropdown';

//Fontawesome
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {
  faComment,
  faEllipsisH,
  faEye,
  faHome,
  faPen,
  faShare,
  faThumbsUp,
  faTrash
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faThumbsUp,
  faComment,
  faShare,
  faPen,
  faHome,
  faEye,
  faTrash,
  faEllipsisH)

//App
createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
