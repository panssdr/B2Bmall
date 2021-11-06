<template>
  <div>
    <el-table :data="list" style="width: 90%;margin: 0 auto"   highlight-current-row   @current-change="handleCurrentChange">
      <el-table-column prop="id" label="ID"> </el-table-column>
      <el-table-column prop="demandID" label="订单ID"> </el-table-column>
      <el-table-column prop="customerID" label="付款金额"> </el-table-column>
      <el-table-column prop="quotedPrice" label="说明" width="100"> </el-table-column>
      <el-table-column prop="merchantID" label="付款方式"> </el-table-column>
      <el-table-column prop="technicianID" label="付款日期"> </el-table-column>
      <el-table-column prop="qcID" label="录入者"> </el-table-column>
      <el-table-column prop="createDate" label="录入日期"> </el-table-column>
      <el-table-column prop="analysisDate" label="收款金额"> </el-table-column>
      <el-table-column prop="quotedDate" label="收款日期"> </el-table-column>
      <el-table-column prop="staffID" label="收款人"> </el-table-column>
      <el-table-column prop="status" label="状态"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template  #default="scope">
          <el-button @click="collection(scope.row.id)" type="text" size="small">确认收款</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Collection',
  data(){
    return{
      list:[{}]
    }
  }
}
</script>

<style scoped>

</style>
