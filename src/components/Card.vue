<!--
 * @Author: litfa
 * @Date: 2022-02-17 17:04:04
 * @LastEditTime: 2022-03-01 11:40:26
 * @LastEditors: litfa
 * @Description: 文章卡片
 * @FilePath: /blog/src/components/Card.vue
 * 
-->
<template>
  <div>
    {{ name }}
    <div class="user">
      <div class="avatar"></div>
      <div class="text">
        <div class="username"></div>
        <div class="date"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  username: {
    type: String
  },
  date: {
    type: [Number, String]
  }
})
</script>

<style lang="less" scoped>
</style>