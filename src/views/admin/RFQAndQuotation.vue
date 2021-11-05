<template>
  <div>
    <el-table :data="list" stripe style="width: 90%;margin: 0 auto" @row-click="getId">
      <el-table-column prop="id" label="ID"> </el-table-column>
      <el-table-column prop="id" label="询价ID"> </el-table-column>
      <el-table-column prop="id" label="需求ID"> </el-table-column>
      <el-table-column prop="type" label="商家报价" width="100"> </el-table-column>
      <el-table-column prop="specifications" label="报价说明"> </el-table-column>
      <el-table-column prop="specifications" label="商家ID"> </el-table-column>
      <el-table-column prop="priceAndAmount" label="技术员ID"> </el-table-column>
      <el-table-column prop="amount" label="创建日期"> </el-table-column>
      <el-table-column prop="amount" label="报价日期"> </el-table-column>
      <el-table-column prop="amount" label="审核日期"> </el-table-column>
      <el-table-column prop="createDate" label="供应ID"> </el-table-column>
      <el-table-column prop="createDate" label="处理状态"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template  #default="scope">
          <el-button @click="examine(scope.row.id)" type="text" size="small">报价审核</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="技术分析" :visible.sync="dialogFormVisible" width="40%">
      <div style="width: 60%;margin: 0px auto;">
        <el-form :model="form" class="demo-form" label-position="left" :rules="rules" ref="form">
          <el-form-item label="报价编号" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="询价ID" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="商家ID" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="指导价" label-width="100px" prop="name" class="item">
            <el-input v-model="form.spec"></el-input>
          </el-form-item>
          <el-form-item label="商家报价" label-width="100px" prop="name" class="item">
            <el-input v-model="form.spec"></el-input>
          </el-form-item>
          <el-form-item label="技术分析" label-width="100px" prop="address" class="item">
            <el-input v-model="form.address" type="textarea" ></el-input>
          </el-form-item>
          <el-form-item label="报价说明" label-width="100px" prop="address" class="item">
            <el-input v-model="form.address" type="textarea" ></el-input>
          </el-form-item>
          <el-form-item label="审核说明" label-width="100px" prop="address" class="item">
            <el-input v-model="form.address" type="textarea" ></el-input>
          </el-form-item>
          <el-form-item label="审核结果" label-width="100px" prop="address" class="item">
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
export default {
  name: 'RFQAndQuotation',
  data(){
    return{
      list:[{}],
      dialogFormVisible: false,
      form:{}
    }
  },
  methods:{
    examine(id){
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
  }
}
</script>

<style scoped>

</style>
