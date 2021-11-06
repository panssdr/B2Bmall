<template>
  <div>
    <el-table :data="list"  style="width: 90%;margin: 0 auto" highlight-current-row
      @current-change="handleCurrentChange">
      <el-table-column prop="id" label="ID"> </el-table-column>
      <el-table-column prop="inquirySheetID" label="询价ID"> </el-table-column>
      <el-table-column prop="demandID" label="需求ID"> </el-table-column>
      <el-table-column prop="quotedPrice" label="商家报价" width="100"> </el-table-column>
      <el-table-column prop="quotedDescript" label="报价说明"> </el-table-column>
      <el-table-column prop="merchantID" label="商家ID"> </el-table-column>
      <el-table-column prop="technicianID" label="技术员ID"> </el-table-column>
      <el-table-column prop="createDate" label="创建日期" width="150"> </el-table-column>
      <el-table-column prop="quotedDate" label="报价日期" width="150"> </el-table-column>
      <el-table-column prop="auditDate" label="审核日期" width="150"> </el-table-column>
      <el-table-column prop="supplyID" label="供应ID"> </el-table-column>
      <el-table-column prop="status" label="处理状态" width="120"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template  #default="scope">
          <el-button @click="examine(scope.row.id)" type="text" size="small">报价审核</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="技术分析" :visible.sync="dialogFormVisible" width="40%">
      <div style="width: 60%;margin: 0px auto;">
        <el-form :model="form" class="demo-form" label-position="left" ref="form">
          <el-form-item label="报价编号" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="询价ID" label-width="100px" class="item">
            <el-input v-model="form.inquirySheetID" disabled></el-input>
          </el-form-item>
          <el-form-item label="商家ID" label-width="100px" class="item">
            <el-input v-model="form.merchantID" disabled></el-input>
          </el-form-item>
          <el-form-item label="指导价" label-width="100px"  class="item">
            <el-input v-model="form.spec"></el-input>
          </el-form-item>
          <el-form-item label="商家报价" label-width="100px" class="item">
            <el-input v-model="form.spec"></el-input>
          </el-form-item>
          <el-form-item label="技术分析" label-width="100px"  class="item">
            <el-input v-model="form.address" type="textarea" ></el-input>
          </el-form-item>
          <el-form-item label="报价说明" label-width="100px"  class="item">
            <el-input v-model="form.address" type="textarea" ></el-input>
          </el-form-item>
          <el-form-item label="审核说明" label-width="100px"  class="item">
            <el-input v-model="form.address" type="textarea" ></el-input>
          </el-form-item>
          <el-form-item label="审核结果" label-width="100px"  class="item">
            <el-radio-group v-model="form.resource">
              <el-radio label="通过"></el-radio>
              <el-radio label="不通过"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="closeDialog" type="danger">关闭</el-button>
          <el-button type="primary" @click="save('form')">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  name: 'RFQAndQuotation',
  data(){
    return{
      list:[{}],
      dialogFormVisible: false,
      form:{},
       currentRow: null,
        isClickId:""
    }
  },
  methods:{
     handleCurrentChange(val) {
        this.currentRow = val;
        this.isClickId=this.currentRow.id
      },
    examine(id){
      // Axios.get("/api/demandsupply/findDemandSupplyByNumId/"+this.isClickId).then(res => this.form=res.data)
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
    getList(){
      Axios.get("/api/demandsupply/findAll").then(res => {this.list=res.data
       this.changeListStatus(this.list)})
    },
     changeListStatus(list){
          for (let i = 0; i < list.length; i++) {
        switch (list[i].status) {
          case 0:
            list[i].status = "等待商家报价";
            break;
          case 1:
            list[i].status = "等待技术审核";
            break;
          case 2:
            list[i].status = "审核通过";
            break;
         case 3:
            list[i].status = "审核不通过";
            break;
         case 4:
            list[i].status = "领导审核通过";
            break;
         case 5:
            list[i].status = "领导审核不通过";
            break;
          case 6:
            list[i].status = "过期";
            break;
        }
        switch(list[i].isSelected){
          case 0:
            list[i].isSelected="没被选中"
            break;
          case 1:
            list[i].isSelected="报价被客服选中"
            break;
        }
      }
     }
  },
  created(){
    this.getList()
  }
}
</script>

<style scoped>

</style>
