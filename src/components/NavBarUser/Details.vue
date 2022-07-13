<!--
 * @Author: litfa
 * @Date: 2022-04-08 16:18:53
 * @LastEditTime: 2022-04-08 16:39:35
 * @LastEditors: litfa
 * @Description: 详情信息
 * @FilePath: /blog/src/components/NavBarUser/Details.vue
 * 
-->
<script lang="ts" setup>
import Li from '@/components/Li/Li.vue'
import { User, Word, Star } from '@icon-park/vue-next'
import SwitchTheme from '../SwitchTheme/Switch.vue'
</script>

<template>
  <div class="Details" >
    <div class="dark">
      暗色模式
      <SwitchTheme />
    </div>
    <Li text="个人中心" to="/account">
      <user theme="outline" size="22" fill="#666" :strokeWidth="3" />
    </Li>
    <Li text="我的文章" to="/account#articles">
      <Word theme="outline" size="22" fill="#666" :strokeWidth="3" />
    </Li>
    <Li text="我的收藏" to="/account#likes">
      <Star theme="outline" size="22" fill="#666" :strokeWidth="3" />
    </Li>
  </div>
</template>

<style lang="less" scoped>
.Details {
  width: 100%;
  li,.dark {
    margin: 20px 0;
  }
  .dark {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>