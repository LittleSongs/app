/*
 * @Description: 对axios进行二次封装
 * @Date: 2022-08-02 20:14:33
 * @LastEditTime: 2022-08-02 21:17:03
 * @FilePath: \app\src\api\request.js
 */

import axios from 'axios';

//1.利用axios对象的方法create，去创建一个axios实例

let requests = axios.create({
  //基础路径,发请求时，路径当中会出现api
  baseURL:"/api",
  //请求超时时间
  timeout:5000,
})
//请求拦截器，在发请求之前，请求拦截器检测到
requests.interceptors.request.use((config)=>{
  //config:配置对象，header请求头属性很重要
  return config;
});

//响应拦截器
requests.interceptors.response.use((res)=>{
  return res.data;
},(error)=>{
  //响应失败的回调函数
  return Promise.reject(new Error('failed'));
});

//对外暴露
export default requests;