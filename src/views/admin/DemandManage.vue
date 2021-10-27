<template>
  <div>
    <div style="margin-left:80px;">
      <el-button class="el-icon-edit" type="text">修改</el-button>
      <el-button class="el-icon-delete" type="text">删除</el-button>
      <el-button class="el-icon-sort" type="text">发起询价</el-button>
      <el-button class="el-icon-circle-close" type="text">停止流转</el-button>
    </div>
    <el-table :data="list" stripe style="width: 90%;margin: 0 auto" @row-click="getId">
      <el-table-column prop="id" label="需求ID"> </el-table-column>
      <el-table-column prop="id" label="客户ID"> </el-table-column>
      <el-table-column prop="type" label="手机号" width="100"> </el-table-column>
      <el-table-column prop="specifications" label="需求名称"> </el-table-column>
      <el-table-column prop="priceAndAmount" label="需求规格"> </el-table-column>
      <el-table-column prop="priceAndAmount" label="需求描述" width="180"> </el-table-column>
      <el-table-column prop="priceAndAmount" label="需求数量"> </el-table-column>
      <el-table-column prop="amount" label="创建日期"> </el-table-column>
      <el-table-column prop="createDate" label="客服号"> </el-table-column>
      <el-table-column prop="createDate" label="供应ID"> </el-table-column>
      <el-table-column prop="createDate" label="商品类别"> </el-table-column>
      <el-table-column prop="createDate" label="处理状态"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template #default="scope">
          <el-button @click="quote(scope.row)" type="text" size="small">下架</el-button>
<!--          <el-button @click="quote(scope.row)" type="text" size="small">上架</el-button>-->
          <!--          <el-button @click="dialogFormVisible = true" type="text" size="small">我要报价</el-button>-->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'DemandManage',
  data(){
    return{
      list:[{}]
    }
  },
  methods:{
    getId(row){
      console.log(row.id)
    }
  }
}
</script>

<style scoped>

</style>
