<!--
 * @Author: litfa
 * @Date: 2022-03-30 19:30:56
 * @LastEditTime: 2022-05-01 15:56:05
 * @LastEditors: litfa
 * @Description: 首页侧边组件
 * @FilePath: /blog/src/components/HomeComponents/HomeComponents.vue
 * 
-->
<script lang="ts" setup>
import Miniprogram from './Miniprogram.vue'
import FriendLink from './FriendLink.vue'
import Footer from './Footer.vue'
import Ad from './Ad.vue'
import Holiday from './Holiday.vue'
import { ref } from 'vue'
import { useElementVisibility } from '@vueuse/core'
const components = [Miniprogram, FriendLink, Footer]

const target = ref(null)
const targetIsVisible = useElementVisibility(target)
</script>

<template>
  <div class="HomeComponents">
    <div ref="target" class="sidebar-block">
      <component v-for="(i, index) in components" :key="index" :is="i" class="component"></component>
    </div>
    <transition name="el-fade-in-linear">
      <div v-show="!targetIsVisible" class="sticky-block">
        <Miniprogram></Miniprogram>
        <!-- <Ad></Ad> -->
        <Holiday></Holiday>
      </div>
    </transition>
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

.sidebar-block {
  padding-bottom: 50px;
}
.sticky-block {
  position: sticky;
  top: 80px;
}
</style>