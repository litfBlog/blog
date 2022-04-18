<!--
 * @Author: litfa
 * @Date: 2022-03-29 21:07:21
 * @LastEditTime: 2022-04-18 18:46:33
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
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('default')
    }
    let listeners = {
      dark: (mediaQueryList: any) => {
        if (mediaQueryList.matches) {
          setTheme('dark')
        }
      },
      light: (mediaQueryList: any) => {
        if (mediaQueryList.matches) {
          setTheme('default')
        }
      }
    }

    window.matchMedia('(prefers-color-scheme: dark)').addListener(listeners.dark)
    window.matchMedia('(prefers-color-scheme: light)').addListener(listeners.light)
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