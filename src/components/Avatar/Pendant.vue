<script lang="ts" setup>
import Avatar from './Avatar.vue'
const props = defineProps({
  src: String,
  alt: String,
  avatarPendantUrl: String
})
</script>

<template>
  <div>
    <avatar :src="src" :alt="alt"></avatar>
  </div>
</template>

<style lang="less" scoped>
</style>