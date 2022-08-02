<!--
 * @Description: 
 * @Date: 2022-07-31 19:08:07
 * @LastEditTime: 2022-07-31 21:36:12
 * @FilePath: \app\src\pages\Home\index.vue
-->
<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
  </div>
</template>

<script>
import ListContainer from "./ListContainer/index.vue";
export default {
    components: { ListContainer }
}
</script>

<style>

</style>