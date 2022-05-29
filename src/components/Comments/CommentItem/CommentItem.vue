<!--
 * @Author: litfa
 * @Date: 2022-04-05 15:50:52
 * @LastEditTime: 2022-04-27 16:46:04
 * @LastEditors: litfa
 * @Description: 评论内容
 * @FilePath: /blog/src/components/Comments/CommentItem/CommentItem.vue
 * 
-->
<script lang="ts" setup>
import propNames from './props'
import CommentChildItem from '../CommentChildItem/CommentChildItem.vue'
import { GoodTwo, More, Caution } from '@icon-park/vue-next'
import emoji from '@/assets/emoji/list'
import replaceEmoji from '../utils/replaceEmoji'
import { computed } from '@vue/reactivity'
import SendComment from '../SendComment/SendComment.vue'
import { ref, nextTick } from 'vue'
import formatDate from '@/utils/formatDate'
import likeCommentApi from '@/apis/likeComment'
import { useRoute } from 'vue-router'
import { report } from '@/components/Report/report'
import Avatar from '@/components/Avatar'

const props = defineProps(propNames)
const route = useRoute()
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

const isLiked = ref(Boolean(props.liked))
const likesCount = ref(props.likes_count || 0)

const likeComment = async () => {
  let id = route.params.id as string

  if (props.id == undefined) return

  // 先切换状态
  isLiked.value = !isLiked.value
  if (isLiked.value) {
    likesCount.value++
  } else {
    likesCount.value--
  }
  // 发起请求
  const { data: res } = await likeCommentApi(id, isLiked.value, props.id)
  if (res.status != 1) {
    if (isLiked.value) {
      likesCount.value--
    } else {
      likesCount.value++
    }
    isLiked.value = !isLiked.value
  } else {
    isLiked.value = res.liked
  }
}
</script>

<template>
  <div class="CommentItem">
    <div class="data">
      <Avatar :src="props.avatar" :alt="`${props.avatar}的头像`" class="avatar" />
      <div class="info">
        <div class="name">{{ username }}</div>
        <div class="content" v-html="content"></div>
        <div class="bottom">
          <span>{{ formatDate(props.date || 0) }}</span>
          <span :class="{ liked: isLiked }" @click="likeComment()">
            <good-two theme="outline" size="18" fill="#666" :strokeWidth="3" />
            {{ likesCount }}
          </span>
          <span @click="viewSend">回复</span>
          <span>
            <el-popover placement="bottom" :width="200" trigger="hover">
              <template #reference>
                <more theme="outline" size="20" fill="#666" :strokeWidth="3" />
              </template>
              <el-button
                @click="report({
                  open: true,
                  reportId: Number(props.id),
                  type: 'comment'
                })"
              >
                <el-icon style="margin-right: 8px;">
                  <Caution></Caution>
                </el-icon>举报
              </el-button>
            </el-popover>
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