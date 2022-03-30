<!--
 * @Author: litfa
 * @Date: 2022-03-30 19:30:56
 * @LastEditTime: 2022-03-30 19:46:35
 * @LastEditors: litfa
 * @Description: 首页侧边组件
 * @FilePath: /blog/src/components/HomeComponents/HomeComponents.vue
 * 
-->
<script lang="ts" setup>
import Miniprogram from './Miniprogram.vue'
const components = [Miniprogram]
</script>

<template>
  <component v-for="(i, index) in components" :key="index" :is="i" class="component"></component>
</template>

<style lang="less" scoped>
.component {
  margin-top: 10px;
}
</style>