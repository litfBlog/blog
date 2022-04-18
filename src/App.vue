<!--
 * @Author: litfa
 * @Date: 2022-03-29 21:07:21
 * @LastEditTime: 2022-04-18 16:50:42
 * @LastEditors: litfa
 * @Description: 
 * @FilePath: /blog/src/App.vue
 * 
-->
<template>
  <NavBar></NavBar>
  <button @click="setTheme('dark')">dark</button>
  <button @click="setTheme('default')">default</button>
  <router-view></router-view>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue'
import { defineComponent } from 'vue'
import getUserInfo from '@/utils/getUserInfo'
import { setTheme } from '@/assets/theme/index'
export default defineComponent({
  name: 'App',
  components: {
    NavBar
  },
  setup() {
    getUserInfo()
    setTheme('default')
    return { setTheme }
  }
})
</script>
<style lang="less">
.navBar {
  position: sticky;
  top: 0;
}
</style>