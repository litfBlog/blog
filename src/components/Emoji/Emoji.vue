<!--
 * @Author: litfa
 * @Date: 2022-04-04 17:11:23
 * @LastEditTime: 2022-04-18 18:33:38
 * @LastEditors: litfa
 * @Description: 表情
 * @FilePath: /blog/src/components/Emoji/Emoji.vue
 * 
-->
<script lang="ts" setup>
import { ref } from 'vue'
import { EmotionHappy } from '@icon-park/vue-next'
import emojis from '@/assets/emoji/list'
import emojiUrl from '@/utils/emojiList'
const visible = ref(false)

const emits = defineEmits(['selectEmoji'])

const selectEmoji = (emoji: string) => {
  emits('selectEmoji', emoji)
}
</script>

<template>
  <el-popover placement="bottom" :width="400" trigger="click">
    <p>选择表情</p>
    <div class="emoji-box">
      <span v-for="emoji in emojis" :key="emoji" @click="selectEmoji(emoji)">
        <img :src="emojiUrl[emoji]" :alt="emoji" />
      </span>
    </div>
    <template #reference>
      <emotion-happy theme="outline" size="24" fill="var(--text-color)" :strokeWidth="3" />
    </template>
  </el-popover>
</template>

<style lang="less" scoped>
.emoji-box {
  display: flex;
  flex-wrap: wrap;
  height: 200px;
  overflow: scroll;
  span {
    width: 30px;
    margin: 5px;
    img {
      width: 100%;
    }
  }
}
</style>