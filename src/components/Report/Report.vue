<!--
 * @Author: litfa
 * @Date: 2022-04-26 19:49:42
 * @LastEditTime: 2022-04-26 20:30:05
 * @LastEditors: litfa
 * @Description: 举报弹窗
 * @FilePath: /blog/src/components/Report/Report.vue
 * 
-->
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import report from '@/apis/report'
const dialogTableVisible = ref(false)
const formRef = ref<null | HTMLElement>(null)

const form = reactive({
  // type, reportId, cause, note
  cause: '',
  note: ''
})

const rules = reactive({
  cause: [
    {
      required: true,
      message: '请选择原因',
      trigger: 'change'
    }
  ],
  note: [
    { max: 200, message: '200字以内', trigger: 'blur' }
  ]
})

const onSubmit = async (formEl: any) => {
  if (!formEl) return
  await formEl.validate(async (valid: any, fields: any) => {
    if (valid) {
      // 提交api
      await report({
        // 这两项 等待完善props
        reportId: 0,
        type: 'comment',
        cause: Number(form.cause),
        note: form.note
      })
    } else {
      ElMessage.warning('请正确填写表单')
    }
  })

}
</script>

<template>
  <el-dialog v-model="dialogTableVisible" title="举报">
    <el-form :model="form" label-width="120px" ref="formRef" :rules="rules">
      <el-form-item label="举报原因" prop="cause">
        <el-radio-group v-model="form.cause">
          <!-- 顺序可以改 但数字不能错 需要对照后台 -->
          <el-radio label="1">色情低俗</el-radio>
          <el-radio label="2">违法犯罪</el-radio>
          <el-radio label="3">造谣传谣</el-radio>
          <el-radio label="4">垃圾广告</el-radio>
          <el-radio label="7">人身攻击</el-radio>
          <el-radio label="5">非原创内容</el-radio>
          <el-radio label="6">骚扰</el-radio>
          <el-radio label="8">引战</el-radio>
          <el-radio label="9">诈骗</el-radio>
          <el-radio label="0">其他</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="举报理由" prop="note">
        <el-input v-model="form.note" type="textarea" maxlength="200" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(formRef)">提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<style lang="less" scoped>
.el-radio-group {
  display: grid;
  grid-row: 3;
  grid-template-columns: 30% 30% 30%;
}
</style>