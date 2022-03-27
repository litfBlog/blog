<!--
 * @Author: litfa
 * @Date: 2022-03-22 11:22:07
 * @LastEditTime: 2022-03-27 20:04:53
 * @LastEditors: litfa
 * @Description: 渲染页面
 * @FilePath: /blog/src/components/Render/Render.vue
 * 
-->
<script lang="ts" setup>
// main.js
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
// 引入你所使用的主题 此处以 github 主题为例
// import githubTheme from '@kangc/v-md-editor/lib/theme/github'
// import '@kangc/v-md-editor/lib/theme/style/github.css'

import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'

// highlightjs
import hljs from 'highlight.js'

// Prism
import Prism from 'prismjs'

VMdPreview.use(vuepressTheme, {
  Hljs: hljs,
  Prism
})

const props = defineProps({
  text: {
    type: String
  }
})
</script>

<template>
  <v-md-preview :text="props.text"></v-md-preview>
</template>

<style lang="less" scoped>
@import "./render.less";
</style>