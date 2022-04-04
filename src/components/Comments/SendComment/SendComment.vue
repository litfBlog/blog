<!--
 * @Author: litfa
 * @Date: 2022-04-04 15:41:30
 * @LastEditTime: 2022-04-04 19:09:44
 * @LastEditors: litfa
 * @Description: 发送评论组件
 * @FilePath: /blog/src/components/Comments/SendComment/SendComment.vue
 * 
-->
<script lang="ts" setup>
import { ref } from 'vue'
import Emoji from '@/components/Emoji/Emoji.vue'

const textarea = ref('')
const input = ref<HTMLElement | null>(null)

const selectEmoji = (emoji: string) => {
  textarea.value += `[${emoji}]`
  input.value?.focus()
}

</script>

<template>
  <div class="SendComments">
    <h3>评论</h3>
    <el-input
      v-model="textarea"
      :rows="2"
      :autosize="{ minRows: 2, maxRows: 4 }"
      type="textarea"
      placeholder="输入评论"
      ref="input"
    />
    <div class="bottom">
      <div class="icons">
        <Emoji @select-emoji="selectEmoji"></Emoji>
      </div>
      <el-button type="success">发送</el-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.SendComments {
  display: flex;
  min-height: 130px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 20px;
  .el-button {
    margin-right: 0;
    margin-left: auto;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    .icons {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }
}
</style>