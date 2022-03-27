<!--
 * @Author: litfa
 * @Date: 2022-03-22 11:05:47
 * @LastEditTime: 2022-03-27 17:31:47
 * @LastEditors: litfa
 * @Description: 页面
 * @FilePath: /blog/src/views/Page.vue
 * 
-->
<script lang="ts" setup>
import Render from '@/components/Render/Render.vue'
import getArticlesApi from '@/apis/getArticles'

import { useRoute } from 'vue-router'
import { ref } from 'vue'
const route = useRoute()

const content = ref('')
const title = ref('')

const getArticles = async () => {
  const { data: res } = await getArticlesApi(route.params.id as string)

  if (res.status == 1) {
    console.log(res)
    content.value = res.data.content
    title.value = res.data.title
  }
}
getArticles()
</script>

<template>
  <Render :text="content"></Render>
</template>

<style lang="less" scoped>
</style>