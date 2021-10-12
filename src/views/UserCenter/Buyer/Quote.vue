<template>
  <div style="width: 90%;margin: 0 auto;margin-top: 30px">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="编号" width="100"> </el-table-column>
      <el-table-column prop="product" label="商品名称"> </el-table-column>
      <el-table-column prop="price" label="价格" width="120"> </el-table-column>
      <el-table-column prop="number" label="数量" width="120"> </el-table-column>
      <el-table-column prop="createDate" label="创建时间" width="120"> </el-table-column>
      <el-table-column prop="status" label="需求状态" width="120"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template #default="scope">
          <el-button @click="detail(scope.row)" type="text" size="small">详细</el-button>
          <el-divider direction="vertical"></el-divider>
          <el-button @click="update(scope.row)" type="text" size="small">修改</el-button>
          <el-divider direction="vertical"></el-divider>
          <el-button @click="delete(scope.row)" type="text" size="small">删除</el-button>
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
  name: 'Quote'
}
</script>

<style scoped>

</style>
