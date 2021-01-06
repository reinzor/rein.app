import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faHome, faVolumeUp, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
library.add(faHome)
library.add(faVolumeUp)
library.add(faMapMarkerAlt)

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
library.add(faLinkedin)
library.add(faGithub)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
