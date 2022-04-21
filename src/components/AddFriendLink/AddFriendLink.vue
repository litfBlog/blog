<!--
 * @Author: litfa
 * @Date: 2022-04-20 20:33:03
 * @LastEditTime: 2022-04-21 15:34:08
 * @LastEditors: litfa
 * @Description: 申请友链
 * @FilePath: /blog/src/components/AddFriendLink/AddFriendLink.vue
 * 
-->
<script lang="ts" setup>
import FriendLinkItem from '../FriendLinkItem/FriendLinkItem.vue'
import { ref, reactive, watch } from 'vue'
import addFriendLinkApi from '@/apis/addFriendLink'
import { ElMessage } from 'element-plus'
const open = ref(true)

const form = reactive({
  name: '',
  url: '',
  desc: '',
  icon: ''
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
  await formEl.validate(async (valid: any, fields: any) => {
    if (valid) {
      const { data: res } = await addFriendLinkApi(form)
      if (res.status == 1) {
        ElMessage.success('提交成功，请等待审核')
      } else {
        ElMessage.error('提交失败，请稍后再试')
      }
    } else {
      ElMessage.warning('表单填写有误')
    }
  })
}

const icon = ref('')
const timeout = 0
watch(() => form.icon, (value) => {
  clearTimeout(timeout)
  setTimeout(() => {
    icon.value = value
  }, 1000)
})
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
            <el-form-item label="头像">
              <el-input v-model="form.icon" />
            </el-form-item>
            <el-form-item label="介绍">
              <el-input v-model="form.desc" />
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit(ruleFormRef)">提交</el-button>
            </el-form-item>
          </el-form>
          <div class="preview">
            <friend-link-item :name="form.name" :desc="form.desc" :avatar="icon"></friend-link-item>
          </div>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "./addFriendLink.less";
</style>