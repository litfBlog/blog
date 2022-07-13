<!--
 * @Author: litfa
 * @Date: 2022-04-19 14:56:30
 * @LastEditTime: 2022-04-19 15:09:28
 * @LastEditors: litfa
 * @Description: 主题切换
 * @FilePath: /blog/src/components/SwitchTheme/SwitchTheme.vue
 * 
-->
<script lang="ts" setup>
import { Sun } from '@icon-park/vue-next'
import { useCounterStore } from '@/store/index'
const user = useCounterStore()

</script>

<template>
  <span v-if="!user.isLogin">
    <sun theme="filled" size="24" fill="var(--text-color)" :strokeWidth="3" />
  </span>
</template>

<style lang="less" scoped>
span {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: @content-background-color;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>