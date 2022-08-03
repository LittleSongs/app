/*
 * @Description: 
 * @Date: 2022-07-31 18:29:16
 * @LastEditTime: 2022-08-02 21:10:13
 * @FilePath: \app\vue.config.js
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false, //关闭eslint
  //配置代理跨域
  devServer: {
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",
      },
    },
  },
})
