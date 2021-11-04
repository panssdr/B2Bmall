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
      <el-table-column prop="id" label="商家报价"> </el-table-column>
      <el-table-column prop="id" label="商家ID"> </el-table-column>
      <el-table-column prop="type" label="技术员ID"> </el-table-column>
      <el-table-column prop="type" label="QC_ID"> </el-table-column>
      <el-table-column prop="amount" label="创建日期"> </el-table-column>
      <el-table-column prop="amount" label="分析日期"> </el-table-column>
      <el-table-column prop="amount" label="报价日期"> </el-table-column>
      <el-table-column prop="amount" label="客服ID"> </el-table-column>
      <el-table-column prop="createDate" label="处理状态"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template #default="scope">
          <el-button @click="select(scope.row.id)" type="text" size="small">选择商家询价</el-button>
        </template>
      </el-table-column>
    </el-table>

<!--    选择商家报价弹窗-->
    <el-dialog title="技术分析" :visible.sync="dialogFormVisible" width="80%">
      <div style="width: 60%;margin: 0px auto;">
        <el-form :model="form" :inline="true" class="demo-form" label-position="left" :rules="rules" ref="form">
          <el-form-item label="ID" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="询价ID" label-width="100px" prop="name" class="item" style="margin-left: 60px">
            <el-input v-model="form.spec" disabled></el-input>
          </el-form-item>
          <el-form-item label="需求名称" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="需求规格" label-width="100px" prop="name" class="item" style="margin-left: 60px">
            <el-input v-model="form.spec" disabled></el-input>
          </el-form-item>
          <el-form-item label="需求类别" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="期望单价" label-width="100px" prop="name" class="item" style="margin-left: 60px">
            <el-input v-model="form.spec" disabled></el-input>
          </el-form-item>
          <el-form-item label="需求数量" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="详情" label-width="100px" prop="name" class="item" style="margin-left: 60px">
            <el-input v-model="form.spec" disabled></el-input>
          </el-form-item>
          <el-form-item label="客户已选商家ID" label-width="120px" class="item">
            <el-input v-model="form.id" ></el-input>
          </el-form-item>
          <el-form-item label="当前已选商家数" label-width="120px" prop="name" class="item" style="margin-left: 60px">
            <el-input v-model="form.spec" ></el-input>
          </el-form-item>
          <el-form-item label="技术分析结果" label-width="100px" class="item">
            <el-input v-model="form.id" disabled></el-input>
          </el-form-item>
        </el-form>
      </div>

      <el-table :data="shopList" stripe style="width: 90%;margin: 0 auto" @row-click="getId" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="id" label="商家ID"> </el-table-column>
        <el-table-column prop="type" label="公司名称"> </el-table-column>
        <el-table-column prop="type" label="所在省"> </el-table-column>
        <el-table-column prop="amount" label="企业规模"> </el-table-column>
        <el-table-column prop="amount" label="主营产品"> </el-table-column>
        <el-table-column prop="amount" label="联系人姓名"> </el-table-column>
        <el-table-column prop="amount" label="联系人手机"> </el-table-column>
        <el-table-column prop="createDate" label="商家类型"> </el-table-column>
        <el-table-column prop="createDate" label="审核状态"> </el-table-column>
      </el-table>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="closeDialog" type="danger">关闭</el-button>
          <el-button type="primary" @click="save('form')">确定询价</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'InquiryManagement',
  data(){
    return{
      list:[{}],
      shopList:[{}],
      dialogFormVisible:false,
      form:{},
    }
  },
  methods:{
    select(){
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
