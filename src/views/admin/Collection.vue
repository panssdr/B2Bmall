<template>
  <div>
    <el-table :data="list" style="width: 90%;margin: 0 auto"   highlight-current-row   @current-change="handleCurrentChange">
      <el-table-column prop="id" label="ID"> </el-table-column>
      <el-table-column prop="orderID" label="订单ID"> </el-table-column>
      <el-table-column prop="amount" label="付款金额"> </el-table-column>
      <el-table-column prop="descript" label="说明" width="100"> </el-table-column>
      <el-table-column prop="paymentMethod" label="付款方式"> </el-table-column>
      <el-table-column prop="paymentDate" label="付款日期"> </el-table-column>
      <el-table-column prop="inputer" label="录入者"> </el-table-column>
      <el-table-column prop="inputDate" label="录入日期"> </el-table-column>
      <el-table-column prop="receivalAmount" label="收款金额"> </el-table-column>
      <el-table-column prop="receivalDate" label="收款日期"> </el-table-column>
      <el-table-column prop="accountantID" label="收款人"> </el-table-column>
      <el-table-column prop="status" label="状态"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template  #default="scope">
          <el-button @click="collection(scope.row)" type="text" size="small">确认收款</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'Collection',
  data(){
    return{
      list:[{}]
    }
  },
  methods:{
    collection(row){
      this.$message({
        message:'确定收款',
        type:'success'
      })
      row.status = '已收款'
    },
    getList(){
      Axios.get("/api/payment/all").then(res => {
        this.list=res.data
      }).catch(res => console.log(res))
    },
  },
  created() {
    this.getList();
  }
}
</script>

<style scoped>

</style>
