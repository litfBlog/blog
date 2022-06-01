<script lang="ts" setup>
const props = defineProps({
  src: String,
  alt: String
})
</script>

<template>
  <el-image :src="src" :alt="alt" fit="cover"></el-image>
</template>

<style lang="less" scoped>
.el-image {
  border-radius: 50%;
}
</style>