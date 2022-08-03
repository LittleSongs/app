<!--
 * @Description: 
 * @Date: 2022-07-31 19:08:07
 * @LastEditTime: 2022-08-03 14:50:55
 * @FilePath: \app\src\pages\Home\index.vue
-->
<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer/index.vue";
import Recommend from "@/pages/Home/Recommend/index.vue";
import Rank from "@/pages/Home/Rank/index.vue";
import Like from "@/pages/Home/Like/index.vue";
import Floor from "@/pages/Home/Floor/index.vue";
import Brand from "@/pages/Home/Brand/index.vue";

export default {
  components: { ListContainer, Recommend, Rank, Like, Floor, Brand },
  methods:{

  }
};
</script>

<style>
</style>