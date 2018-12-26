import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import  Axios from "axios";

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.HOST = "/baidu_music_api";
Vue.prototype.$axios = Axios;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',

});
