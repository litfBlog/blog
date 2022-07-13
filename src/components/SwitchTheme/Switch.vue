<script lang="ts" setup>
import { ref } from 'vue'
import { Moon, Sun } from '@icon-park/vue-next'
import { setTheme } from '@/assets/theme/index'
const isDark = ref(false)
const change = (val: number | string | boolean) => {
  setTheme(val ? 'dark' : 'default')
}
</script>

<template>
  <el-switch
    v-model="isDark"
    inline-prompt
    active-color="#333"
    inactive-color="#ccc"
    :active-icon="Moon"
    :inactive-icon="Sun"
    @change="change"
  />
</template>

<style lang="less" scoped>
</style>