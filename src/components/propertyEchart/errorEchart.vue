<template>
  <!-- 设备报错原因分析 -->
  <el-table :data="tableData" style="width: 100%;" size="small">
    <el-table-column prop="type" label="类型" />
    <el-table-column prop="num" label="数量" />
    <el-table-column prop="address" label="占比" />
  </el-table>
</template>

<script lang="ts" setup>
const tableData = [
  {
    type: '工厂用电',
    num: '1000',

  },
  {
    type: '工厂用煤',
    num: '950',

  },
  {
    type: '员工充电',
    num: '850',

  },
  {
    type: '日常照明',
    num: '750',

  },
  {
    type: '设备未关',
    num: '650',

  },
  {
    type: '光伏发电',
    num: '600',

  },
]
</script>
<style scoped>
.el-table {
  height: 260px;
  border: none;
}
</style>
