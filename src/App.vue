<!--
 * @Author: litfa
 * @Date: 2022-03-29 21:07:21
 * @LastEditTime: 2022-05-03 18:18:35
 * @LastEditors: litfa
 * @Description: 
 * @FilePath: /blog/src/App.vue
 * 
-->

<script lang="ts" setup>
import NavBar from '@/components/NavBar.vue'
import { inject } from 'vue'
import getUserInfo from '@/utils/getUserInfo'
import { setTheme } from '@/assets/theme/index'
import SwitchTheme from './components/SwitchTheme/SwitchTheme.vue'
import Report from './components/Report/Report.vue'

getUserInfo()
let theme = 'default'
// 判断是不是暗黑模式
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  setTheme('dark')
  theme = 'dark'
} else {
  setTheme('default')
  theme = 'default'
}
// 监听暗黑模式切换
let listeners = {
  dark: (mediaQueryList: any) => {
    if (mediaQueryList.matches) {
      setTheme('dark')
      theme = 'dark'
    }
  },
  light: (mediaQueryList: any) => {
    if (mediaQueryList.matches) {
      setTheme('default')
      theme = 'default'
    }
  }
}
window.matchMedia('(prefers-color-scheme: dark)').addListener(listeners.dark)
window.matchMedia('(prefers-color-scheme: light)').addListener(listeners.light)
// 切换模式的方法
const swichTheme = () => {
  if (theme == 'default') {
    setTheme('dark')
    theme = 'dark'
  } else {
    setTheme('default')
    theme = 'default'
  }
}

inject('swichTheme')
</script>

<template>
  <NavBar></NavBar>
  <SwitchTheme class="SwitchTheme" @click="swichTheme"></SwitchTheme>
  <router-view></router-view>
  <Report></Report>
</template>

<style lang="less">
.navBar {
  position: sticky;
  top: 0;
}
.SwitchTheme {
  position: fixed;
  right: 10px;
  bottom: 10px;
}
</style>