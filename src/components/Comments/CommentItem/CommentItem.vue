<!--
 * @Author: litfa
 * @Date: 2022-04-05 15:50:52
 * @LastEditTime: 2022-04-12 17:46:17
 * @LastEditors: litfa
 * @Description: 评论内容
 * @FilePath: /blog/src/components/Comments/CommentItem/CommentItem.vue
 * 
-->
<script lang="ts" setup>
import propNames from './props'
import CommentChildItem from '../CommentChildItem/CommentChildItem.vue'
import { GoodTwo, More } from '@icon-park/vue-next'
import emoji from '@/assets/emoji/list'
import replaceEmoji from '../utils/replaceEmoji'
import { computed } from '@vue/reactivity'
import SendComment from '../SendComment/SendComment.vue'
import { ref, nextTick } from 'vue'
import formatDate from '@/utils/formatDate'
const props = defineProps(propNames)
const content = computed(() => {
  return replaceEmoji(props.content as string, emoji)
})
const showSend = ref(false)
const parentUsername = (parent: number) => {
  for (const i in props.children) {
    let index = Number(i)
    let item = props.children[index] as any
    if (item?.id == parent) {
      return item.username
    }
  }
}

const sendComment = ref<any | null>(null)
const viewSend = () => {
  showSend.value = !showSend.value
  if (showSend.value) {
    nextTick(() => {
      sendComment.value?.focusInput()
    })
  }
}
</script>

<template>
  <div class="CommentItem">
    <div class="data">
      <el-image :src="props.avatar" :alt="`${props.avatar}的头像`" fit="cover" />
      <div class="info">
        <div class="name">{{ username }}</div>
        <div class="content" v-html="content"></div>
        <div class="bottom">
          <span>{{ formatDate(props.date || 0) }}</span>
          <span :class="{ liked: liked }">
            <good-two theme="outline" size="18" fill="#666" :strokeWidth="3" />
            {{ likes_count }}
          </span>
          <span @click="viewSend">回复</span>
          <span>
            <more theme="outline" size="20" fill="#666" :strokeWidth="3" />
          </span>
        </div>
      </div>
    </div>
    <transition name="el-zoom-in-top">
      <SendComment
        v-if="showSend"
        ref="sendComment"
        title=" "
        :placeholder="`回复：${username}`"
        :father="id"
        :parent="id"
      ></SendComment>
    </transition>
    <CommentChildItem
      v-for="item in (props.children as any)"
      :key="item.id"
      v-bind="item"
      :parentUsername="parentUsername(item.parent)"
    ></CommentChildItem>
  </div>
</template>

<style lang="less" scoped>
@import "./commentItem.less";
</style>