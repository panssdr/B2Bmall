<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="product" label="商品名称" width="180"> </el-table-column>
      <el-table-column prop="type" label="类型" width="180"> </el-table-column>
      <el-table-column prop="specification" label="产品规格"> </el-table-column>
      <el-table-column prop="Price" label="单价"> </el-table-column>
      <el-table-column prop="isExist" label="有无现货"> </el-table-column>
      <el-table-column prop="limit" label="最小起订量"> </el-table-column>
      <el-table-column prop="company" label="供货单位"> </el-table-column>
      <el-table-column prop="createDate" label="创建日期"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template #default="scope">
          <el-button @click="procurement(scope.row)" type="text" size="small"
          >我要采购</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!--    弹窗-->
    <el-dialog title="我要采购" :visible.sync="dialogFormVisible" width="40%">
      <el-form :inline="true" :model="form" class="demo-form-inline" label-position="left" :rules="rules" ref="form">
        <el-form-item label="商品编号" label-width="100px">
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
        <el-form-item label="数量" label-width="100px" prop="number">
          <el-input v-model="form.number"></el-input>
        </el-form-item>
        <el-form-item label="单位" label-width="100px">
          <el-input v-model="form.user" disabled></el-input>
        </el-form-item>
        <el-form-item label="单价(元)" label-width="100px">
          <el-input v-model="form.price" disabled></el-input>
        </el-form-item>
        <el-form-item label="用途" label-width="100px">
          <el-input v-model="form.user" disabled></el-input>
        </el-form-item>
        <el-form-item label="期望价格(元)" label-width="100px" prop="expectPrice">
          <el-input v-model="form.expectPrice" :placeholder="form.price"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
    <span class="dialog-footer">
      <el-button @click="closeDialog" type="danger">关闭窗口</el-button>
      <el-button type="primary" @click="save('form')">保存需求</el-button>
    </span>
      </template>
    </el-dialog>
  </div>

</template>

<script>
export default {
  name: 'Provide',
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
      dialogFormVisible: false,
      form: {
        number:'',
        price:10,
        expectPrice:'',
      },
      rules:{
        number: [
          { required: true, message: '请填写需求数量', trigger: 'blur' }
        ],
      },
    }
  },
  methods:{
    procurement(){
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
