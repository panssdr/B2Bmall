<template>
  <div>
    <div style="margin-left:60px;">
      <el-input placeholder="按ID/商家ID/需求ID搜索..."
                style="width: 300px;margin-left: 20px"
                v-model="search"
                type="text"
                clearable>
        <template #append>
          <el-button icon="el-icon-search" @click="forSearch"></el-button>
        </template>
      </el-input>
    </div>
    <el-table :data="list" stripe style="width: 90%;margin: 0 auto" @row-click="getId">
      <el-table-column prop="id" label="询价ID"> </el-table-column>
      <el-table-column prop="id" label="客户ID"> </el-table-column>
      <el-table-column prop="id" label="需求ID"> </el-table-column>
      <el-table-column prop="type" label="技术员ID"> </el-table-column>
      <el-table-column prop="amount" label="创建日期"> </el-table-column>
      <el-table-column prop="amount" label="分析日期"> </el-table-column>
      <el-table-column prop="amount" label="客服ID"> </el-table-column>
      <el-table-column prop="createDate" label="处理状态"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template #default="scope">
          <el-button @click="analysis(scope.row.id)" type="text" size="small">技术分析</el-button>
        </template>
      </el-table-column>
    </el-table>

<!--    技术分析弹窗-->
    <el-dialog title="技术分析" :visible.sync="dialogFormVisible" width="40%">
      <div style="width: 60%;margin: 0px auto;">
        <el-form :model="form" class="demo-form" label-position="left" :rules="rules" ref="form">
          <el-form-item label="ID" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="指导价(元/米)" label-width="100px" prop="name" class="item">
            <el-input v-model="form.spec" placeholder="输入数字"></el-input>
          </el-form-item>
          <el-form-item label="技术分析" label-width="100px" prop="address" class="item">
            <el-input v-model="form.address" type="textarea" placeholder="输入分析描述"></el-input>
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
  name: 'InquiryAnalysis',
  data(){
    return{
      list:[{}],
      dialogFormVisible:false,
      form:{},
    }
  },
  methods:{
    analysis(id){
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
