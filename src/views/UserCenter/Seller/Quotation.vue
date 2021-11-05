<template>
  <div>
    <el-table :data="list" stripe style="width: 90%;margin: 0 auto" @row-click="getId">
      <el-table-column prop="id" label="ID"> </el-table-column>
      <el-table-column prop="id" label="需求商品"> </el-table-column>
      <el-table-column prop="id" label="价格"> </el-table-column>
      <el-table-column prop="id" label="数量"> </el-table-column>
      <el-table-column prop="amount" label="创建日期"> </el-table-column>
      <el-table-column prop="amount" label="报价单状态"> </el-table-column>
      <el-table-column prop="amount" label="报价单ID"> </el-table-column>
      <el-table-column prop="amount" label="选中标记"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template #default="scope">
          <el-button @click="detail(scope.row.id)" type="text" size="small">报价详情</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="报价单详细信息" :visible.sync="dialogFormVisible" width="60%">
      <div style="width: 60%;margin: 0px auto;">
        <el-form :model="form" class="demo-form" label-position="left" :rules="rules" ref="form">
          <el-form-item label="编号" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="类别1" label-width="100px" prop="name" class="item"  >
            <el-input v-model="form.spec" disabled></el-input>
          </el-form-item>
          <el-form-item label="商品规格" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="商品描述" label-width="100px" prop="name" class="item"  >
            <el-input v-model="form.spec" disabled></el-input>
          </el-form-item>
          <el-form-item label="单价(元/米)" label-width="100px" prop="name" class="item"  >
            <el-input v-model="form.spec" disabled></el-input>
          </el-form-item>
          <el-form-item label="数量(米)" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="用途" label-width="100px" prop="name" class="item"  >
            <el-input v-model="form.spec" disabled></el-input>
          </el-form-item>
          <el-form-item label="报价单状态" label-width="100px" prop="name" class="item"  >
            <el-input v-model="form.spec" disabled></el-input>
          </el-form-item>
          <el-form-item label="报价单创建日期" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="商家报价" label-width="100px" class="item">
            <el-input v-model="form.id" ></el-input>
          </el-form-item>
          <el-form-item label="报价说明" label-width="100px" class="item">
            <el-input v-model="form.id" type="textarea"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="closeDialog" type="danger">关闭</el-button>
          <el-button type="primary" @click="save('form')">确定报价</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Quotation',
  data(){
    return{
      list:[{}],
      dialogFormVisible: false,
      form:{},
    }
  },
  methods:{
    detail(id){
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
