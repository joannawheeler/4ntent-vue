// Polyfills
import 'es6-promise/auto'
import 'babel-polyfill'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import App from './App'
import router from './router'
import VuesticPlugin from 'vuestic-theme/vuestic-plugin'
import './i18n'
import YmapPlugin from 'vue-yandex-maps'
import FullCalendar from 'vue-full-calendar'
import store from './store'
import firebase from 'firebase'
import VueFirestore from 'vue-firestore'
import BootstrapVue from 'bootstrap-vue'
import VueMatchHeights from 'vue-match-heights';
import VueMq from 'vue-mq'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import vueScrollto from 'vue-scrollto'
import vmodal from 'vue-js-modal'



/* eslint-disable-next-line */
import init from './firebaseInit'


// eslint workaround
let d = init
d = null
console.log(d, 'Firebase init ignore')


//UI components
Vue.use(Antd)
Vue.use(vmodal)
Vue.use(vueScrollto)
Vue.use(Vuetify)
Vue.use(VuesticPlugin)
Vue.use(YmapPlugin)
Vue.use(FullCalendar)
Vue.use(BootstrapVue)
Vue.use(VueFirestore)
Vue.use(VueMatchHeights, {
  disabled: [768], // Optional: default viewports widths to disabled resizing on. Can be overridden per usage
});
Vue.use(VueMq, {
  breakpoints: {
    // xs:
    sm: 576,
    md: 992,
    mdAndUp: Infinity
  }
})

// NOTE: workaround for VeeValidate + vuetable-2
Vue.use(VeeValidate, { fieldsBagName: 'formFields' })





Vue.use(Vuetify)






let mediaHandler = () => {

  if (window.matchMedia(store.getters.config.windowMatchSizeLg).matches) {
    store.dispatch('toggleSidebar', true)
  } else {
    store.dispatch('toggleSidebar', false)
  }
}

router.beforeEach((to, from, next) => {
  store.commit('setLoading', true)
  next()
})

router.afterEach((to, from) => {
  mediaHandler()
  store.commit('setLoading', false)
})

/* eslint-disable no-new */
let app
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App)
    })
  }
})
