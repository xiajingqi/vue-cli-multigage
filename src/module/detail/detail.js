import Vue from 'vue'
import App from './App'
import mintui from 'mint-ui'
import 'mint-ui/lib/style.min.css'
// import jquery from 'jquery'
Vue.use(mintui)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
