<!--
 * @Author: litfa
 * @Date: 2022-03-07 19:16:33
 * @LastEditTime: 2022-04-07 19:51:46
 * @LastEditors: litfa
 * @Description: 顶部栏用户模块
 * @FilePath: /blog/src/components/NavBarUser.vue
 * 
-->
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
let user = computed(() => {
  return store.state.user
})
</script>

<template>
  <el-popover placement="bottom" :width="200" trigger="hover">
    <template #reference>
      <router-link to="/account" class="user">
        {{ user.userName }}
        <el-image class="avatar" :src="user.avatar" fit="cover"></el-image>
      </router-link>
    </template>
    111
  </el-popover>
</template>

<style lang="less" scoped>
.user {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  .avatar {
    // width: 100%;
    height: 80%;
    border-radius: 50%;
    background-color: #aaa;
  }
}
</style>