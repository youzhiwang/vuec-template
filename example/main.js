import Vue from 'vue'
import App from './App.vue'
// 引入组件库
import MyComponents from '../packages/index'

Vue.use(MyComponents)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
