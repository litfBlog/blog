<!--
 * @Author: litfa
 * @Date: 2022-03-13 17:44:23
 * @LastEditTime: 2022-03-13 17:44:59
 * @LastEditors: litfa
 * @Description: markdown编辑器
 * @FilePath: /blog/src/components/Editior/markdown.vue
 * 
-->
<script lang="ts" setup>
// 编辑器
import VMdEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'

// Prism
import Prism from 'prismjs'
// highlight code
import 'prismjs/components/prism-json'

VMdEditor.use(vuepressTheme, {
  Prism
})

</script>

<template>
  <VMdEditor></VMdEditor>
</template>

<style lang="less" scoped>
</style>