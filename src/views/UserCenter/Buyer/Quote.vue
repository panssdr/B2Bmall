<template>
  <div style="width: 90%;margin: 0 auto;margin-top: 30px">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="编号" width="100"> </el-table-column>
      <el-table-column prop="goodsName" label="商品名称"> </el-table-column>
      <el-table-column prop="price" label="价格" width="120"> </el-table-column>
      <el-table-column prop="amount" label="数量" width="120"> </el-table-column>
      <el-table-column prop="createDate" label="创建时间" width="120"> </el-table-column>
      <el-table-column prop="status" label="需求状态" width="120"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template #default="scope">
          <el-button @click="detail(scope.row)" type="text" size="small">客服报价</el-button>
<!--          <el-button @click="detail(scope.row)" type="text" size="small">详细</el-button>-->
<!--          <el-divider direction="vertical"></el-divider>-->
<!--          <el-button @click="update(scope.row)" type="text" size="small">修改</el-button>-->
<!--          <el-divider direction="vertical"></el-divider>-->
<!--          <el-button @click="delete(scope.row)" type="text" size="small">删除</el-button>-->
          <!--          <el-button @click="dialogFormVisible = true" type="text" size="small">我要报价</el-button>-->
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="产看客服报价" :visible.sync="dialogFormVisible" width="40%">
      <div style="width: 60%;margin: 0px auto;">
        <el-form :model="form" class="demo-form" label-position="left" :rules="rules" ref="form">
          <el-form-item label="编号" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="商品规格" label-width="100px" class="item">
            <el-input v-model="form.specifications" disabled></el-input>
          </el-form-item>
          <el-form-item label="单价" label-width="100px" class="item">
            <el-input v-model="form.price" disabled></el-input>
          </el-form-item>
          <el-form-item label="数量" label-width="100px" class="item">
            <el-input v-model="form.amount"></el-input>
          </el-form-item>
          <el-form-item label="创建日期" label-width="100px" class="item">
            <el-input v-model="form.createDate" disabled></el-input>
          </el-form-item>
          <el-form-item label="商家报价" label-width="100px" class="item">
            <el-input v-model="form.quotedPrice" disabled></el-input>
          </el-form-item>
          <el-form-item label="报价结果" label-width="100px" class="item">
            <el-radio-group v-model="form.resource">
              <el-radio label="同意报价"></el-radio>
              <el-radio label="拒绝报价"></el-radio>
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
import Axios from 'axios'

export default {
  name: 'Quote',
  data(){
    return{
      tableData: [{}],
      dialogFormVisible:false,
      form:{},
    }
  },
  methods:{
    detail(id){
      this.dialogFormVisible = true;
      Axios.get("/api/demand/byId"+id).then(res => {
        this.form=res.data
        // this.changeListStatus(this.tableData)
      })
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
      Axios.get("/api/demand/all").then(res => {
        this.tableData=res.data
        // this.changeListStatus(this.tableData)
      })
    },
  },
  created() {
    this.getList();
  }
}
</script>

<style scoped>

</style>
