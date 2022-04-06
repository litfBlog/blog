<!--
 * @Author: litfa
 * @Date: 2022-04-05 16:41:48
 * @LastEditTime: 2022-04-06 17:57:39
 * @LastEditors: litfa
 * @Description: 评论回复
 * @FilePath: /blog/src/components/Comments/CommentChildItem/CommentChildItem.vue
 * 
-->
<script lang="ts" setup>
import propNames from './props'
import { ref } from 'vue'
import { GoodTwo, More } from '@icon-park/vue-next'
import SendComment from '../SendComment/SendComment.vue'
import emoji from '@/assets/emoji/list'
import replaceEmoji from '../utils/replaceEmoji'
import { computed } from '@vue/reactivity'

const content = computed(() => {
  return replaceEmoji(props.content as string, emoji)
})

const props = defineProps(propNames)
const showSend = ref(false)
</script>

<template>
  <div class="CommentChildItem">
    <div class="data">
      <el-image :src="props.avatar" :alt="`${props.avatar}的头像`" fit="cover" />
      <div class="info">
        <div class="name">{{ username }}</div>
        <div class="content" v-html="(parentUsername ? `回复 ${parentUsername}：` : '') + content"></div>
        <div class="bottom">
          <span>一小时前</span>
          <span>
            <good-two theme="outline" size="18" fill="#666" :strokeWidth="3" />100
          </span>
          <span class="reply" @click="showSend = !showSend">回复</span>
          <span class="more">
            <more theme="outline" size="20" fill="#666" :strokeWidth="3" />
          </span>
        </div>
      </div>
    </div>
    <transition name="el-zoom-in-top">
      <SendComment
        v-if="showSend"
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