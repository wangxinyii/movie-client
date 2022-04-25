import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// Bootstrap 样式
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// 视频播放
// import VideoPlayer from 'vue-video-player'


// 引入video.js
 
import Videojs from 'video.js'
 
import 'video.js/dist/video-js.css'
 


// require('video.js/dist/video-js.css')
// require('vue-video-player/src/custom-theme.css')

Vue.prototype.$video = Videojs

// Vue.use(VideoPlayer)

Vue.use(BootstrapVue)

Vue.use(ElementUI)

Vue.config.productionTip = false

//让请求携带上浏览器的cookie
axios.defaults.withCredentials=true
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
