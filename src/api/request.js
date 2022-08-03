/*
 * @Description: 对axios进行二次封装
 * @Date: 2022-08-02 20:14:33
 * @LastEditTime: 2022-08-03 13:58:52
 * @FilePath: \app\src\api\request.js
 */

import axios from 'axios';
//引入请求进度条
import nprogress from 'nprogress';
//引入进度条样式
import "nprogress/nprogress.css";
//start方法：进度条开始   done:进度条结束

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
  //nprogress进度条开始动
  nprogress.start();
  return config;
});

//响应拦截器
requests.interceptors.response.use((res)=>{
    //nprogress进度条结束
    nprogress.done();
  return res.data;
},(error)=>{
  //响应失败的回调函数
  return Promise.reject(new Error('failed'));
});

//对外暴露
export default requests;