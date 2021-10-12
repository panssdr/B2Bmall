<template>
  <div style="width: 95%;margin: 0 auto;margin-top: 30px">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="合同号" width="140"> </el-table-column>
      <el-table-column prop="product" label="订单号"> </el-table-column>
      <el-table-column prop="product" label="商品名称"> </el-table-column>
      <el-table-column prop="price" label="价格" width="80"> </el-table-column>
      <el-table-column prop="number" label="数量" width="80"> </el-table-column>
      <el-table-column prop="createDate" label="单位" width="80"> </el-table-column>
      <el-table-column prop="createDate" label="创建时间" width="120"> </el-table-column>
      <el-table-column prop="status" label="订单状态" width="80"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template #default="scope">
          <el-button @click="demand(scope.row)" type="text" size="small">查看合同</el-button>
          <!--          <el-button @click="dialogFormVisible = true" type="text" size="small">我要报价</el-button>-->
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage1"
      :page-sizes="[10, 20]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="100"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'Contract',
  data(){
    return{
      tableData: [{}]
    }
  }
}
</script>

<style scoped>

</style>
