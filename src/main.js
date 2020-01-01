import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

/* 三百毫秒点击延迟 */
import FastClick from 'fastclick'
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body);
  }, false);
}

// 引入全局样式
import './style/common.less';
// 3. 引入全局UI组件库-vant
import '@/plugins/vant';
import './config/rem';
import './config/filters'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
