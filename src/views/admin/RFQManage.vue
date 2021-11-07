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

          <el-button @click="generate(scope.row.id)" type="text" size="small">生成订单</el-button>
<!--          <el-button @click="send(scope.row.id)" type="text" size="small">中止处理</el-button>-->
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="创建新订单" :visible.sync="dialogFormVisible" width="70%">
      <div style="width: 60%;margin: 0px auto;">
        <el-form :model="form" class="demo-form" :inline="true" label-position="left" :rules="rules" ref="form">
          <el-form-item label="需求ID" label-width="100px" class="item">
            <el-input v-model="form.demandID" disabled></el-input>
          </el-form-item>
          <el-form-item label="供应ID" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="客户ID" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="商家ID" label-width="100px" class="item">
            <el-input v-model="form.merchantID" disabled></el-input>
          </el-form-item>
          <el-form-item label="商品名称" label-width="100px" prop="name" class="item">
            <el-input v-model="form.spec"></el-input>
          </el-form-item>
          <el-form-item label="商品类别" label-width="100px" prop="name" class="item">
            <el-input v-model="form.spec"></el-input>
          </el-form-item>
          <el-form-item label="商品规格" label-width="100px" prop="address" class="item">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="数量单位" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="订购数量" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="单位价格(元)" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="订单描述" label-width="100px" prop="address" class="item">
            <el-input v-model="form.address" type="textarea" style="width: 450px" :rows="3"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="closeDialog" type="danger">关闭</el-button>
          <el-button type="primary" @click="save('form')">生成订单</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'RFQManage',
  data(){
    return{
      list:[{}],
      currentRow:null,
      dialogFormVisible:false,
      form:{}
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
    },
    generate(id){
      this.dialogFormVisible = true;
    },
    save(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: '保存成功',
            type: 'success'
          });
          this.dialogFormVisible = false;
        } else {
          // console.log('error submit!!');
          return false;
        }
      });
    },
    //关闭弹窗
    closeDialog(){
      this.dialogFormVisible = false;
    },
    //给客户报价
    toCustomer(){

    }
  },
  created(){
    this.getList();
  },
}
</script>

<style scoped>

</style>
