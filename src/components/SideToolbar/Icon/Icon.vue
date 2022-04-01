<!--
 * @Author: litfa
 * @Date: 2022-04-01 16:09:23
 * @LastEditTime: 2022-04-01 18:00:26
 * @LastEditors: litfa
 * @Description: icon
 * @FilePath: /blog/src/components/SideToolbar/Icon/Icon.vue
 * 
-->
<script lang="ts" setup>
import propNames from './props'
const props = defineProps(propNames)
</script>

<template>
  <div class="Icon">
    <slot></slot>
    <span>{{ count }}</span>
  </div>
</template>

<style lang="less" scoped>
.Icon {
  width: 40px;
  height: 40px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  &:hover {
    :deep(path) {
      stroke: @primary !important;
    }
    color: @primary;
  }
}
</style>