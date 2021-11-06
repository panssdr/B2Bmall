<template>
  <div>
    <div style="margin-left:60px;">
      <el-input placeholder="按ID/商家ID/需求ID搜索..."
                style="width: 300px;margin-left: 20px"
                v-model="search"
                type="text"
                clearable>
        <template #append>
          <el-button icon="el-icon-search" ></el-button>
        </template>
      </el-input>
    </div>
    <el-table :data="list"  style="width: 90%;margin: 0 auto"  highlight-current-row   @current-change="handleCurrentChange">>
      <el-table-column prop="id" label="询价ID"> </el-table-column>
      <el-table-column prop="demandID" label="需求ID"> </el-table-column>
      <el-table-column prop="customerID" label="客户ID"> </el-table-column>
      <el-table-column prop="technicianID" label="技术员ID"> </el-table-column>
      <el-table-column prop="createDate" label="创建日期"> </el-table-column>
      <el-table-column prop="analysisDate" label="分析日期"> </el-table-column>
      <el-table-column prop="staffID" label="客服ID"> </el-table-column>
      <el-table-column prop="status" label="处理状态"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template #default="scope">
          <el-button @click="analysis(scope.row.id)" type="text" size="small">技术分析</el-button>
        </template>
      </el-table-column>
    </el-table>

<!--    技术分析弹窗-->
    <el-dialog title="技术分析" :visible.sync="dialogFormVisible" width="40%">
      <div style="width: 60%;margin: 0px auto;">
        <el-form :model="form" class="demo-form" label-position="left"  ref="form">
          <el-form-item label="ID" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="指导价(元/米)" label-width="100px"  class="item">
            <el-input v-model="form.guidePrice" placeholder="输入数字"></el-input>
          </el-form-item>
          <el-form-item label="技术分析" label-width="100px" class="item">
            <el-input v-model="form.analysisDescript" type="textarea" placeholder="输入分析描述"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="closeDialog" type="danger">关闭</el-button>
          <el-button type="primary" @click="save(form)">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import Axios from "axios"
export default {
  name: 'InquiryAnalysis',
  data(){
    return{
      list:[{}],
      dialogFormVisible:false,
      form:{},
      search:""
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
    analysis(id){
      this.dialogFormVisible = true;
      Axios.get("/api/inquirysheet/findById/"+id).then(res => this.form=res.data)
      console.log(this.form);
    },
    forsearch(){

    },
    save(formName){
       Axios.post("/api/inquirysheet/sendAnalysisDescript",formName).then( this.getList())
        this.dialogFormVisible = false;
    },
    //关闭弹窗
    closeDialog(){
      this.dialogFormVisible = false;
    },
  },
  created(){
    this.getList();
  }
}
</script>

<style scoped>

</style>
