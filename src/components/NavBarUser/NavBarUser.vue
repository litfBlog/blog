<!--
 * @Author: litfa
 * @Date: 2022-03-07 19:16:33
 * @LastEditTime: 2022-04-08 18:47:24
 * @LastEditors: litfa
 * @Description: 顶部栏用户模块
 * @FilePath: /blog/src/components/NavBarUser/NavBarUser.vue
 * 
-->
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import Details from './Details.vue'

const store = useStore()
let user = computed(() => {
  return store.state.user
})
const open = ref(false)
const display = ref(false)
const showPopover = (isShow: boolean, cssdisplay?: boolean) => {
  open.value = isShow
  if (cssdisplay != undefined) {
    if (cssdisplay == true) {
      display.value = cssdisplay
    } else {
      setTimeout(() => {
        display.value = cssdisplay
      }, 500)
    }
  }
}
</script>

<template>
  <router-link to="/account" class="user" :class="{ open: open, hide: !open }">
    <el-image
      class="avatar-mini"
      :src="user.avatar"
      fit="cover"
      @mouseover="showPopover(true, true)"
    ></el-image>
    <el-popover
      placement="bottom"
      :width="200"
      trigger="hover"
      :show-after="100"
      :show-arrow="false"
      @show="showPopover(true)"
      @hide="showPopover(false)"
      @after-leave="showPopover(false, false)"
      :offset="-10"
      style="z-index: 10;"
      popper-class="navbar-user-popper"
    >
      <template #reference>
        <div class="avatar-position" :style="{ display: display ? 'block' : 'none' }">
          <router-link to="/account" class="user" :class="{ open: open, hide: !open }">
            <el-image class="avatar" :src="user.avatar" fit="cover"></el-image>
          </router-link>
        </div>
      </template>
      <div class="popover">
        <span class="username">{{ user.userName }}</span>
        <Details></Details>
      </div>
    </el-popover>
  </router-link>
</template>

<style lang="less" scoped>
@import "./navBarUser.less";
</style>

<style>
.navbar-user-popper {
  z-index: 999 !important;
}
</style>