<template>
  <div>
    <el-table :data="list" stripe style="width: 90%;margin: 0 auto" @row-click="getId">
      <el-table-column prop="list.id" label="询价ID"> </el-table-column>
      <el-table-column prop="id" label="需求ID"> </el-table-column>
      <el-table-column prop="id" label="客户ID"> </el-table-column>
      <el-table-column prop="type" label="商家报价" width="100"> </el-table-column>
      <el-table-column prop="specifications" label="商家ID"> </el-table-column>
      <el-table-column prop="priceAndAmount" label="技术员ID"> </el-table-column>
      <el-table-column prop="priceAndAmount" label="QC_ID"> </el-table-column>
      <el-table-column prop="amount" label="创建日期"> </el-table-column>
      <el-table-column prop="amount" label="分析日期"> </el-table-column>
      <el-table-column prop="amount" label="报价日期"> </el-table-column>
      <el-table-column prop="createDate" label="客服ID"> </el-table-column>
      <el-table-column prop="createDate" label="处理状态"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'RFQManage',
  data(){
    return{
      list:[{}]
    }
  }
}
</script>

<style scoped>

</style>
