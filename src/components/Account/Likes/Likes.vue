<!--
 * @Author: litfa
 * @Date: 2022-04-07 16:04:51
 * @LastEditTime: 2022-05-03 15:03:17
 * @LastEditors: litfa
 * @Description: 点赞的文章
 * @FilePath: /blog/src/components/Account/Likes/Likes.vue
 * 
-->
<script lang="ts" setup>
import Card from '@/components/Card/Card.vue'
import { computed, ref } from 'vue'
import getLikesApi from '@/apis/getLikes'
import { useCounterStore } from '@/store/index'
import EmptyList from '@/components/Illustrations/EmptyList.vue'
const store = useCounterStore()
let user = computed(() => {
  return store
})
const likesList: any = ref([])
const getLikes = async () => {
  const { data: res } = await getLikesApi(undefined, undefined, user.value.id)
  likesList.value = res.data.filter((e: { id: null | number }) => {
    return e.id !== null
  })
}
getLikes()
</script>

<template>
  <div class="Likes">
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
    <EmptyList v-if="(likesList.length < 1)"></EmptyList>
  </div>
</template>

<style lang="less" scoped>
.Likes {
  padding-bottom: 40px;
  .card {
    border-bottom: 0.5px #aaaa solid;
    border-radius: 0;
    height: 160px;
    :deep(.articles) {
      margin-left: 0;
    }
  }
}
</style>