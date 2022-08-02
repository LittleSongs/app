/*
 * @Description: 配置路由的地方
 * @Date: 2022-07-31 19:10:22
 * @LastEditTime: 2022-07-31 21:15:50
 * @FilePath: \app\src\router\index.js
 */


import Vue from 'vue';
import VueRouter from 'vue-router';
//使用插件
Vue.use(VueRouter);
//引入路由组件
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Search from '@/pages/Search';

// 解决重复点击路由报错的BUG
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

//配置路由
export default new VueRouter({
  routes:[
    {
      path:"/home",
      component: Home,
      meta:{show:true}
    },
    {
      path:"/search",
      component: Search,
      meta:{show:true},
      name:"search",
    },
    {
      path:"/login",
      component: Login,
      meta:{show:false}
    },
    {
      path:"/register",
      component: Register,
      meta:{show:false}
    },
    //重定向
    {
      path:"/",
      redirect:"/home",
    }
  ]
});