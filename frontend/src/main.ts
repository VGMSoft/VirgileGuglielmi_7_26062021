//Vue
import {createApp} from 'vue'
import App from '@/App.vue'
import {router} from './router'

//Bootstrap JS
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';

//Fontawesome
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {
  faArrowCircleDown,
  faCog,
  faComment,
  faEllipsisH,
  faEnvelope,
  faEye,
  faHome,
  faLock,
  faMinusCircle,
  faPen,
  faPlusCircle,
  faPowerOff,
  faShare,
  faThumbsUp,
  faTimes,
  faTrash,
  faUser
} from '@fortawesome/free-solid-svg-icons'
//VeeValidate
import {defineRule} from 'vee-validate';
import {confirmed, email, min, regex, required} from '@vee-validate/rules';

library.add(
  faThumbsUp,
  faComment,
  faShare,
  faPen,
  faHome,
  faEye,
  faTrash,
  faEllipsisH,
  faPowerOff,
  faUser,
  faEnvelope,
  faPlusCircle,
  faMinusCircle,
  faCog,
  faLock,
  faTimes,
  faArrowCircleDown)

defineRule('min', min);
defineRule('email', email);
defineRule('regex', regex);
defineRule('required', required);
defineRule('confirmed', confirmed);

//App
createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
