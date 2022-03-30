<!--
 * @Author: litfa
 * @Date: 2022-03-29 21:07:21
 * @LastEditTime: 2022-03-30 19:39:34
 * @LastEditors: litfa
 * @Description: 
 * @FilePath: /blog/src/App.vue
 * 
-->
<template>
  <NavBar></NavBar>
  <router-view></router-view>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue'
import { defineComponent } from 'vue'
import getUserInfo from '@/utils/getUserInfo'
export default defineComponent({
  name: 'App',
  components: {
    NavBar
  },
  setup() {
    getUserInfo()
  }
})
</script>
<style lang="less">
.navBar {
  position: sticky;
  top: 0;
}
</style>