/* 
 * @Description: home vuex仓库
 * @Date: 2022-08-03 14:52:17
 * @LastEditTime: 2022-08-03 15:13:49
 * @FilePath: \app\src\store\home\index.js
 */

import {reqCategoryList} from '@/api';
const state={
  categoryList:[],
};
const mutations={
  CATEGORYLIST(state,categoryList){
    state.categoryList = categoryList;
  }
};
const actions={
  //通过API里面的接口函数调用，想服务器发送请求
  async categoryList({commit}){
    let result = await reqCategoryList();
    console.log("🚀 ~ file: index.js ~ line 15 ~ categoryList ~ result", result);
    if(result.code === 200){
      commit('CATEGORYLIST', result.data);
    }
  }
};
const getters={};

export default {
  state,
  mutations,
  actions,
  getters
}