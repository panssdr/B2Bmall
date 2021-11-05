<template>
  <div>
    <el-table :data="list" stripe style="width: 90%;margin: 0 auto" @row-click="getId">
      <el-table-column prop="id" label="询价ID"> </el-table-column>
      <el-table-column prop="id" label="需求ID"> </el-table-column>
      <el-table-column prop="id" label="客户ID"> </el-table-column>
      <el-table-column prop="type" label="商家报价"> </el-table-column>
      <el-table-column prop="specifications" label="商家ID"> </el-table-column>
      <el-table-column prop="priceAndAmount" label="技术员ID"> </el-table-column>
      <el-table-column prop="priceAndAmount" label="QC_ID"> </el-table-column>
      <el-table-column prop="amount" label="创建日期"> </el-table-column>
      <el-table-column prop="amount" label="分析日期"> </el-table-column>
      <el-table-column prop="amount" label="报价日期"> </el-table-column>
      <el-table-column prop="createDate" label="客服ID"> </el-table-column>
      <el-table-column prop="createDate" label="处理状态"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template  #default="scope">
          <el-popconfirm
            title="确定给客户报价吗？"
            @confirm="toCustomer(scope.row.id)"
          >
            <el-button type="text" size="small" slot="reference">给客户报价</el-button>
          </el-popconfirm>
          <el-button @click="send(scope.row.id)" type="text" size="small">发邮件</el-button>

<!--          <el-button @click="generate(scope.row.id)" type="text" size="small">生成订单</el-button>-->
<!--          <el-button @click="send(scope.row.id)" type="text" size="small">中止处理</el-button>-->
        </template>
      </el-table-column>
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
  },
  methods:{
    toCustomer(id){
      this.$message({
        message: '报价成功',
        type: 'success'
      });
    },
    generate(id){

    }
  }
}
</script>

<style scoped>

</style>
