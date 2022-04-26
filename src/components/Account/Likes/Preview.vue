<!--
 * @Author: litfa
 * @Date: 2022-04-07 16:05:05
 * @LastEditTime: 2022-04-26 17:50:17
 * @LastEditors: litfa
 * @Description: 预览
 * @FilePath: /blog/src/components/Account/Likes/Preview.vue
 * 
-->
<script lang="ts" setup>
import Preview from '../Preview/Preview.vue'
import Card from '@/components/Card/Card.vue'
import { computed, ref } from 'vue'
import getLikesApi from '@/apis/getLikes'
import { useCounterStore } from '@/store/index'
const store = useCounterStore()
let user = computed(() => {
  return store
})
const likesList: any = ref([])
const getLikes = async () => {
  const { data: res } = await getLikesApi(3, undefined, user.value.id)
  likesList.value = res.data.filter((e: { id: null | number }) => {
    return e.id !== null
  })
}
getLikes()
</script>

<template>
  <div class="Likes">
    <Preview title="最近点赞的文章" to="#likes">
      <Card
        v-for="i in likesList"
        :key="i.id"
        :view-author="false"
        :view-shadow="false"
        :id="i.id"
        :avatar="i.avatar"
        :username="i.username"
        :date="i.createDate"
        :title="i.title"
        :desc="i.desc || i.content"
        :cover="i.cover"
        :likes-count="i.likes_count"
      ></Card>
    </Preview>
  </div>
</template>

<style lang="less" scoped>
.Likes {
  padding-bottom: 40px;
  .card {
    border-bottom: 0.5px rgba(170, 170, 170, 0.208) solid;
    border-radius: 0;
    height: 160px;
    :deep(.articles) {
      margin-left: 0;
    }
  }
}
</style>