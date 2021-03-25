import Vue from 'vue'
import App from './App.vue'
import store from './store'
import toast from 'components/common/toast'
import FastClick  from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

// 事件总线
Vue.prototype.$bus = new Vue()

// 使用自定义插件
Vue.use(toast)

// 使用fastclick解决手机端点击延迟问题 这个没有解决 先不用
// Vue.use(FastClick)
// FastClick.attach(document.body)

// 图片懒加载
Vue.use(VueLazyload,{
  loading: require('./assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
