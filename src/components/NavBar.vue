<!--
 * @Author: litfa
 * @Date: 2022-02-16 18:24:27
 * @LastEditTime: 2022-02-17 15:32:56
 * @LastEditors: litfa
 * @Description: 顶部栏
 * @FilePath: /blog/src/components/NavBar.vue
 * 
-->
<template>
  <div class="navBar">
    <div class="left">
      <router-link to="/">
        <img
          class="logo"
          :src="require('@/assets/logo.webp')"
          alt="logo"
        >
        <span class="title">Litf Press</span>
      </router-link>
    </div>
    <div class="right"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="less" scoped>
.navBar {
  height: 70px;
  display: flex;
  align-items: center;
  background-color: @card-background-color;
  box-shadow: 0 0px 10px 5px rgba(114, 114, 114, 0.096);
  .left,
  a {
    display: flex;
    align-items: center;
    .logo {
      height: 38px;
    }
    .title {
      font-size: 26px;
      font-weight: 600;
      color: #2c3e50;
    }
  }
}
</style>