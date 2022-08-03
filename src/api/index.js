/*
 * @Description: 对API进行统一管理
 * @Date: 2022-08-02 20:44:54
 * @LastEditTime: 2022-08-02 21:12:23
 * @FilePath: \app\src\api\index.js
 */

import requests from './request';

//三级联动菜单
//api/product/getBaseCategoryList   get   无参数

export const reqCategoryList = ()=>{
  //发请求 axios返回的结果是Promise对象
  return requests({url:'/product/getBaseCategoryList',method:'get'});
};