<!--
 * @Author: litfa
 * @Date: 2022-03-29 19:18:53
 * @LastEditTime: 2022-04-06 19:14:57
 * @LastEditors: litfa
 * @Description: 个人中心
 * @FilePath: /blog/src/views/Account.vue
 * 
-->
<script lang="ts" setup>
import User from '@/components/Account/User/User.vue'
import Account from '@/components/Account/Account.vue'
</script>

<template>
  <div class="Account">
    <User></User>
    <Account></Account>
  </div>
</template>

<style lang="less" scoped>
.Account {
  background-color: @card-background-color;
  max-width: 1000px;
  margin: auto;
  padding: 20px;
}
</style>