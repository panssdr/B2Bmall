<template>
  <div>
    <el-table :data="list"  style="width: 90%;margin: 0 auto"   highlight-current-row
      @current-change="handleCurrentChange">
      <el-table-column prop="id" label="ID"> </el-table-column>
      <el-table-column prop="goodsName" label="需求商品"> </el-table-column>
      <el-table-column prop="price" label="价格"> </el-table-column>
      <el-table-column prop="amount" label="数量"> </el-table-column>
      <el-table-column prop="createDate" label="创建日期" width="200"> </el-table-column>
      <el-table-column prop="status" label="报价单状态"> </el-table-column>
      <el-table-column prop="supplyID" label="报价单ID"> </el-table-column>
      <el-table-column prop="isSelected" label="选中标记"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template #default="scope">
          <el-button @click="detail(scope.row.id)" type="text" size="small">报价详情</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="报价单详细信息" :visible.sync="dialogFormVisible" width="60%">
      <div style="width: 60%;margin: 0px auto;">
        <el-form :model="form" class="demo-form" label-position="left" ref="form">
          <el-form-item label="编号" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="类别1" label-width="100px"  class="item"  >
            <el-input v-model="form.category" disabled></el-input>
          </el-form-item>
          <el-form-item label="商品规格" label-width="100px" class="item">
            <el-input v-model="form.specifications" disabled></el-input>
          </el-form-item>
          <el-form-item label="商品描述" label-width="100px"  class="item"  >
            <el-input v-model="form.descript" disabled></el-input>
          </el-form-item>
          <el-form-item label="单价(元/米)" label-width="100px"  class="item"  >
            <el-input v-model="form.price" disabled></el-input>
          </el-form-item>
          <el-form-item label="数量(米)" label-width="100px" class="item">
            <el-input v-model="form.amount" disabled></el-input>
          </el-form-item>
          <el-form-item label="用途" label-width="100px"  class="item"  >
            <el-input v-model="form.usePurpose" disabled></el-input>
          </el-form-item>
          <el-form-item label="商家报价" label-width="100px" class="item">
            <el-input v-model="form.quotedPrice" ></el-input>
          </el-form-item>
          <el-form-item label="报价说明" label-width="100px" class="item">
            <el-input v-model="form.quotedDescript" type="textarea"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="closeDialog" type="danger">关闭</el-button>
          <el-button type="primary" @click="save(form)">确定报价</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import Axios from "axios"
export default {
  name: 'Quotation',
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
    detail(id){
      this.dialogFormVisible = true;
       this.getForm()
    },
    save(formName){

        Axios.post("/api/demandsupply/merchantOffer",formName).then(res =>{this.getForm()
        this.dialogFormVisible = false;}).catch(res => alert("失败"))

    },
    //关闭弹窗
    closeDialog(){
      this.dialogFormVisible = false;
    },
     getList(){
    Axios.get("/api/demandsupply/findDemandSupplyById/"+1000).then(res => {this.list=res.data
       this.changeListStatus(this.list)
     })
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
   },
   getForm(){
     Axios.get("/api/demandsupply/findDemandSupplyByNumId/"+this.isClickId).then(res => this.form=res.data)
   }
  },
  created(){
    this.getList()

  }
}
</script>

<style scoped>

</style>
