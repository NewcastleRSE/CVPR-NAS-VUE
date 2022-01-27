import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vueAxios from 'vue-axios'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight, faArrowLeft, faSearch, faUserCircle, faFileArchive  } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'vue-progress-path/dist/vue-progress-path.css'
import VueProgress from 'vue-progress-path'

library.add(faArrowRight, faArrowLeft, faSearch, faUserCircle, faFileArchive)
library.add(faTwitter)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(vueAxios, axios)
Vue.use(VueProgress, {
  // defaultShape: 'circle',
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
