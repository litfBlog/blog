<script lang="ts" setup>
import Avatar from './Avatar.vue'
const props = defineProps({
  src: String,
  alt: String,
  avatarPendantUrl: String
})
</script>

<template>
  <div class="avatar-pendant">
    <avatar :src="src" :alt="alt"></avatar>
    <div class="pendant" :style="{ backgroundImage: `url(${avatarPendantUrl})` }"></div>
  </div>
</template>

<style lang="less" scoped>
.avatar-pendant {
  border-radius: 50%;
  position: relative;
  .pendant {
    background-repeat: no-repeat;
    position: absolute;
    width: 125%;
    height: 125%;
    background-size: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>