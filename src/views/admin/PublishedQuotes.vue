<template>
  <div>
    <div style="margin-left:60px;">
      <el-input placeholder="按ID/商家ID/需求ID搜索..."
                style="width: 300px;margin-left: 20px"
                v-model="search"
                type="text"
                clearable>
        <template #append>
          <el-button icon="el-icon-search" @click="forSearch"></el-button>
        </template>
      </el-input>
    </div>
    <el-table :data="list" stripe style="width: 90%;margin: 0 auto" @row-click="getId">
      <el-table-column prop="id" label="ID"> </el-table-column>
      <el-table-column prop="id" label="需求ID"> </el-table-column>
      <el-table-column prop="type" label="商家报价"> </el-table-column>
      <el-table-column prop="specifications" label="报价说明"  width="100"> </el-table-column>
      <el-table-column prop="id" label="商家ID"> </el-table-column>
      <el-table-column prop="id" label="技术员ID"> </el-table-column>
      <el-table-column prop="amount" label="报价日期"> </el-table-column>
      <el-table-column prop="amount" label="审核日期"> </el-table-column>
      <el-table-column prop="createDate" label="处理状态"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template #default="scope">
          <el-button @click="quote(scope.row.id)" type="text" size="small">发布报价</el-button>
          <!--          <el-button @click="quote(scope.row)" type="text" size="small">上架</el-button>-->
          <!--          <el-button @click="dialogFormVisible = true" type="text" size="small">我要报价</el-button>-->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'PublishedQuotes',
  data(){
    return{
      list:[{}]
    }
  }
}
</script>

<style scoped>

</style>
