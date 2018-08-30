// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'reset-css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
import rem from './components/generally/js/rem'
import AMap from 'vue-amap';
Vue.use(AMap);

AMap.initAMapApiLoader({
    key: '04cf78dff13da7e8eeb13e9ac827c326',
    plugin: ['AMap.Geolocation']
});
// AMap.setMapStyle('amap://styles/whitesmoke');

Vue.config.productionTip = false
Vue.prototype.axios=axios;
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
