/*
 * @Description: Vuex状态管理
 * @Date: 2022-08-03 14:05:01
 * @LastEditTime: 2022-08-03 15:03:37
 * @FilePath: \app\src\store\index.js
 */
import Vue from 'vue';
import Vuex from 'vuex';
//引入小仓库
import home from './home';
import search from './search';

Vue.use(Vuex);
// state:{}存储数据的地方
// mutations:{},修改state的唯一手段
// actions:{},//可以书写自己的业务逻辑，也可以处理异步
// getters:{},//理解为计算属性，简化仓库数据，让组件获取仓库数据更加方便

//对外暴露
const store= new Vuex.Store({
  //实现Vuex仓库模块式开发存储数据
  modules:{
    home,
    search,
  }
});

export default store;