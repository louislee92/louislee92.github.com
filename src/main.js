// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import $ from 'jquery'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Viewer from "v-viewer";
import 'viewerjs/dist/viewer.css'
import App from './App'
import router from './router'
// import api from './api/inter'
import './styles/index.scss'
import store from "./store";
import bus from './api/bus'

Vue.use(ElementUI)
Vue.use(Viewer)

Vue.config.productionTip = false

// 引入jquery
// Vue.prototype.$ = $
// 设置事件总线
Vue.prototype.$bus = bus;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
