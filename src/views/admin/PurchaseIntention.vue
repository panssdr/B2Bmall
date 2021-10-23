<template>
  <div>
    <el-table :data="list" stripe style="width: 90%;margin: 0 auto">
      <el-table-column type="selection" width="50"> </el-table-column>
      <el-table-column prop="id" label="ID"> </el-table-column>
      <el-table-column prop="type" label="手机号" width="180"> </el-table-column>
      <el-table-column prop="specifications" label="图片"> </el-table-column>
      <el-table-column prop="priceAndAmount" label="需求描述" width="180"> </el-table-column>
      <el-table-column prop="amount" label="创建日期" width="180"> </el-table-column>
      <el-table-column prop="createDate" label="处理日期" width="180"> </el-table-column>
      <el-table-column prop="createDate" label="客服号"> </el-table-column>
      <el-table-column prop="createDate" label="处理状态"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template #default="scope">
          <el-button @click="quote(scope.row)" type="text" size="small">删除</el-button>
          <!--          <el-button @click="dialogFormVisible = true" type="text" size="small">我要报价</el-button>-->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'PurchaseIntention',
  data(){
    return{
      list:[{}]
    }
  }
}
</script>

<style scoped>

</style>
