/*
 * @Description: 
 * @Date: 2022-07-31 18:29:16
 * @LastEditTime: 2022-08-03 15:04:53
 * @FilePath: \app\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import store from '@/store';
//三级联动组件---全局组件
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name,TypeNav);

//引入路由
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
