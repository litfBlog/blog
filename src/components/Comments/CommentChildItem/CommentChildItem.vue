<!--
 * @Author: litfa
 * @Date: 2022-04-05 16:41:48
 * @LastEditTime: 2022-04-27 16:47:11
 * @LastEditors: litfa
 * @Description: 评论回复
 * @FilePath: /blog/src/components/Comments/CommentChildItem/CommentChildItem.vue
 * 
-->
<script lang="ts" setup>
import propNames from './props'
import { nextTick, ref } from 'vue'
import { GoodTwo, More, Caution } from '@icon-park/vue-next'
import SendComment from '../SendComment/SendComment.vue'
import emoji from '@/assets/emoji/list'
import replaceEmoji from '../utils/replaceEmoji'
import { computed } from '@vue/reactivity'
import formatDate from '@/utils/formatDate'
import likeCommentApi from '@/apis/likeComment'
import { useRoute } from 'vue-router'
import { report } from '@/components/Report/report'
import Avatar from '@/components/Avatar'

const route = useRoute()

const content = computed(() => {
  return replaceEmoji(props.content as string, emoji)
})

const props = defineProps(propNames)
const showSend = ref(false)
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
  <div class="CommentChildItem">
    <div class="data">
      <Avatar
        :src="props.avatar"
        :alt="`${props.avatar}的头像`"
        :avatarPendantUrl="avatar_pendant_url"
        class="avatar"
      />
      <div class="info">
        <div class="name">{{ username }}</div>
        <div class="content" v-html="(parentUsername ? `回复 ${parentUsername}：` : '') + content"></div>
        <div class="bottom">
          <span>{{ formatDate(Number(props.date) || 0) }}</span>
          <span :class="{ liked: isLiked }" @click="likeComment()">
            <good-two theme="outline" size="18" fill="#666" :strokeWidth="3" />
            {{ likesCount }}
          </span>
          <span class="reply" @click="viewSend">回复</span>

          <span class="more">
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
        :father="props.father"
        :parent="props.id"
      ></SendComment>
    </transition>
  </div>
</template>

<style lang="less" scoped>
@import "./commentChildItem.less";
</style>