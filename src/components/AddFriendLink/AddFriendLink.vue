<!--
 * @Author: litfa
 * @Date: 2022-04-20 20:33:03
 * @LastEditTime: 2022-04-21 15:08:02
 * @LastEditors: litfa
 * @Description: 申请友链
 * @FilePath: /blog/src/components/AddFriendLink/AddFriendLink.vue
 * 
-->
<script lang="ts" setup>
import FriendLinkItem from '../FriendLinkItem/FriendLinkItem.vue'
import { ref, reactive } from 'vue'
const open = ref(true)

const form = reactive({
  name: '',
  url: '',
  desc: '',
  avatar: ''
})
const rules = reactive({
  name: [
    { required: true, message: '请填写网站名', trigger: 'blur' },
    { min: 2, max: 10, message: '长度为3~5个字符', trigger: 'blur' }
  ],
  url: [
    { required: true, message: '请填写首页地址', trigger: 'blur' },
    { min: 4, max: 50, message: '长度为4~50个字符', trigger: 'blur' }
  ]
})

const ruleFormRef = ref<any>()

const onSubmit = async (formEl: any) => {
  console.log('submit!')
  if (!formEl) return
  await formEl.validate((valid: any, fields: any) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <div>
    <el-button type="success" @click="open = !open">添加友链</el-button>
    <div style="margin-top: 20px; height: 200px">
      <el-collapse-transition>
        <div class="form" v-show="open">
          <el-form
            ref="ruleFormRef"
            :model="form"
            :rules="rules"
            label-width="100px"
            label-position="right"
            class="demo-form-inline"
          >
            <el-form-item label="网站名" prop="name">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="主页地址" prop="url">
              <el-input v-model="form.url" />
            </el-form-item>
            <el-form-item label="介绍">
              <el-input v-model="form.desc" />
            </el-form-item>
            <el-form-item label="头像">
              <el-input v-model="form.avatar" />
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit(ruleFormRef)">提交</el-button>
            </el-form-item>
          </el-form>
          <div class="preview">
            <friend-link-item :name="form.name" :desc="form.desc" :avatar="form.avatar"></friend-link-item>
          </div>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "./addFriendLink.less";
</style>