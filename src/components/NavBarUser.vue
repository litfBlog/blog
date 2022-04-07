<!--
 * @Author: litfa
 * @Date: 2022-03-07 19:16:33
 * @LastEditTime: 2022-04-07 21:01:08
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
const open = ref(false)
const showPopover = (isShow: boolean) => {
  open.value = isShow
}
</script>

<template>
  <router-link to="/account" class="user" :class="{ open: open, hide: !open }">
    <el-image class="avatar-mini" :src="user.avatar" fit="cover"></el-image>
    <el-popover
      placement="bottom"
      :width="200"
      trigger="hover"
      :show-after="100"
      :show-arrow="false"
      @show="showPopover(true)"
      @hide="showPopover(false)"
      :offset="-10"
      style="z-index: 10;"
      popper-class="navbar-user-popper"
    >
      <template #reference>
        <div class="avatar-position" @mouseover="showPopover(true)">
          <el-image class="avatar" :src="user.avatar" fit="cover"></el-image>
        </div>
      </template>
      {{ user.userName }}
    </el-popover>
  </router-link>
</template>

<style lang="less" scoped>
.user {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  position: relative;
  .avatar-mini {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: #aaa;
  }
  .avatar-position {
    position: absolute;
    transform: translateX(-40%);
    z-index: 30000;
    width: 82px;
    height: 82px;
    left: 0;
    top: 0;
    .avatar {
      width: 82px;
      height: 82px;
      border-radius: 50%;
    }
  }
}
.hide {
  .avatar-position {
    .avatar {
      animation: hide-avatar 0.5s forwards;
    }
  }
}
.open {
  .avatar-position {
    .avatar {
      animation: open-avatar 0.5s forwards;
    }
  }
}
@keyframes open-avatar {
  0% {
    transform: scale(0.7) translate(28px, -9px);
  }
  100% {
    transform: scale(1.2) translate(0);
  }
}
@keyframes hide-avatar {
  0% {
    transform: scale(1.2) translate(0);
  }
  100% {
    transform: scale(0.7) translate(28px, -9px);
  }
}
</style>

<style>
.navbar-user-popper {
  z-index: 999 !important;
}
</style>