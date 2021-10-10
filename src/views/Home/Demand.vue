<template>
  <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="product" label="商品名称" width="180"> </el-table-column>
      <el-table-column prop="type" label="类型" width="180"> </el-table-column>
      <el-table-column prop="specification" label="产品规格"> </el-table-column>
      <el-table-column prop="expectPrice" label="期望价格"> </el-table-column>
      <el-table-column prop="number" label="数量"> </el-table-column>
      <el-table-column prop="createDate" label="创建日期"> </el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template #default="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small"
        >我要报价</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'Demand',
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
    }
  },
}
</script>

<style scoped>

</style>
