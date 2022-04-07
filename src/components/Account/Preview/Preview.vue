<!--
 * @Author: litfa
 * @Date: 2022-04-06 19:27:25
 * @LastEditTime: 2022-04-07 18:34:29
 * @LastEditors: litfa
 * @Description: 预览组件(框架)
 * @FilePath: /blog/src/components/Account/Preview/Preview.vue
 * 
-->
<script lang="ts" setup>
import propNames from './props'
const props = defineProps(propNames)
const checked = () => {
  if (props.to) {
    document.documentElement.scrollTop = 80
    document.body.scrollTop = 80
    window.location.hash = props.to
  }
}

</script>

<template>
  <div class="Preview">
    <header>
      <div class="title">{{ title }}</div>
      <div>
        <el-tag type="info" @click="checked">更多 ></el-tag>
      </div>
    </header>
    <slot />
  </div>
</template>

<style lang="less" scoped>
@import "./preview.less";
</style>