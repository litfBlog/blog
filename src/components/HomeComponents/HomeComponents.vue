<!--
 * @Author: litfa
 * @Date: 2022-03-30 19:30:56
 * @LastEditTime: 2022-04-08 18:59:53
 * @LastEditors: litfa
 * @Description: 首页侧边组件
 * @FilePath: /blog/src/components/HomeComponents/HomeComponents.vue
 * 
-->
<script lang="ts" setup>
import Miniprogram from './Miniprogram.vue'
import Footer from './Footer.vue'
const components = [Miniprogram, Footer]
</script>

<template>
  <div class="HomeComponents">
    <component v-for="(i, index) in components" :key="index" :is="i" class="component"></component>
  </div>
</template>

<style lang="less" scoped>
.HomeComponents {
  display: flex;
  flex-direction: column;
}
.component {
  margin-top: 10px;
}
</style>