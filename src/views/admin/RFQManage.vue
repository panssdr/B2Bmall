<template>
  <div>
    <el-table :data="list" style="width: 90%;margin: 0 auto"   highlight-current-row   @current-change="handleCurrentChange">
      <el-table-column prop="id" label="询价ID"> </el-table-column>
      <el-table-column prop="demandID" label="需求ID"> </el-table-column>
      <el-table-column prop="customerID" label="客户ID"> </el-table-column>
      <el-table-column prop="quotedPrice" label="商家报价" width="100"> </el-table-column>
      <el-table-column prop="merchantID" label="商家ID"> </el-table-column>
      <el-table-column prop="technicianID" label="技术员ID"> </el-table-column>
      <el-table-column prop="qcID" label="QC_ID"> </el-table-column>
      <el-table-column prop="createDate" label="创建日期"> </el-table-column>
      <el-table-column prop="analysisDate" label="分析日期"> </el-table-column>
      <el-table-column prop="quotedDate" label="报价日期"> </el-table-column>
      <el-table-column prop="staffID" label="客服ID"> </el-table-column>
      <el-table-column prop="status" label="处理状态"> </el-table-column>
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
import Axios from 'axios'
export default {
  name: 'RFQManage',
  data(){
    return{
      list:[{}],
      currentRow:null
    }
  },
  methods:{
    handleCurrentChange(val) {
        this.currentRow = val;
      },
    getList(){
      Axios.get("/api/inquirysheet/findAll").then(res => {this.list=res.data
        this.changeStatus(this.list)
      }).catch(res => console.log(res))
    },
    changeStatus(list){
      for(let i=0;i<list.length;i++){
        switch(list[i].status){
          case 0:
            list[i].status="等待技术分析"
            break
          case 1:
            list[i].status="分析完成"
            break
         case 2:
            list[i].status="正在收集报价信息"
            break
         case 3:
            list[i].status="报价结束"
            break
         case 4:
            list[i].status="结束"
            break
         case 5:
            list[i].status="中止处理"
            break
         case 6:
            list[i].status="正常结束"
            break
        case 7:
            list[i].status="客户确认价格不满意"
            break
        case 8:
            list[i].status="客户确认价格满意"
            break
        }
      }
    }
  },
  created(){
    this.getList();
  }
}
</script>

<style scoped>

</style>
