<template>
  <div class="demand">
    <el-table :data="demandList" stripe style="width: 100%">
      <el-table-column prop="goodsName" label="商品名称" width="180"> </el-table-column>
      <el-table-column prop="type" label="类型" width="180"> </el-table-column>
      <el-table-column prop="specifications" label="产品规格"> </el-table-column>
      <el-table-column prop="priceAndAmount" label="期望价格"> </el-table-column>
      <el-table-column prop="amount" label="数量"> </el-table-column>
      <el-table-column prop="createDate" label="创建日期"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template #default="scope">
               <el-button @click="quote(scope.row)" type="text" size="small">我要报价</el-button>
              <!--          <el-button @click="dialogFormVisible = true" type="text" size="small">我要报价</el-button>-->
        </template>
      </el-table-column>
    </el-table>

<!--    弹窗-->
    <el-dialog title="我要报价" :visible.sync="dialogFormVisible" width="40%">
      <el-form :inline="true" :model="form" class="demo-form-inline" label-position="left" :rules="rules" ref="form">
        <el-form-item label="需求编号" label-width="100px">
          <el-input v-model="form.user" disabled></el-input>
        </el-form-item>
        <el-form-item label="商品名称" label-width="100px">
          <el-input v-model="form.user" disabled></el-input>
        </el-form-item>
        <el-form-item label="商品规格" label-width="100px">
          <el-input v-model="form.user" disabled></el-input>
        </el-form-item>
        <el-form-item label="商品描述" label-width="100px">
          <el-input v-model="form.user" disabled></el-input>
        </el-form-item>
        <el-form-item label="数量" label-width="100px">
          <el-input v-model="form.user" disabled></el-input>
        </el-form-item>
        <el-form-item label="单位" label-width="100px">
          <el-input v-model="form.user" disabled></el-input>
        </el-form-item>
        <el-form-item label="期望单价(元)" label-width="100px">
          <el-input v-model="form.user" disabled></el-input>
        </el-form-item>
        <el-form-item label="用途" label-width="100px">
          <el-input v-model="form.user" disabled></el-input>
        </el-form-item>
        <el-form-item label="商家报价(元)" label-width="100px" prop="providePrice">
          <el-input v-model="form.providePrice"></el-input>
        </el-form-item>
        <br/>
        <el-form-item label="报价说明" label-width="100px" prop="ill">
          <el-input v-model="form.ill" type="textarea" maxlength="30" show-word-limit></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
    <span class="dialog-footer">
      <el-button @click="closeDialog" type="danger">关闭窗口</el-button>
      <el-button type="primary" @click="save('form')">保存报价</el-button>
    </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Demand',
  props:['demandList'],
  data() {
    return {

      // tableData: [{}],
      dialogFormVisible: false,
      form: {
        providePrice: '',
        ill: '',
      },
      rules:{
        providePrice: [
          { required: true, message: '请填写商家报价', trigger: 'blur' }
        ],
        ill: [
          { required: true, message: '请填写报价说明', trigger: 'blur' }
        ],
      },
    }
  },
  methods:{
    quote(){
      this.dialogFormVisible = true;
      this.$refs['form'].resetFields();
      // console.log(this.dialogFormVisible)
    },

    closeDialog(){
      this.dialogFormVisible = false;
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
  },

}
</script>

<style scoped>

</style>
