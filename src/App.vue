<!--
 * @Description: App.vue
 * @Date: 2022-07-31 18:29:16
 * @LastEditTime: 2022-08-02 21:15:01
 * @FilePath: \app\src\App.vue
-->
<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <!-- 在home或search下显示，在登录和注册隐藏 -->
    <Footer v-show="$route.meta.show"> </Footer>
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";

//TODO
import {reqCategoryList} from "@/api";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted(){
    reqCategoryList();
  }
};
</script>

<style>
</style>
