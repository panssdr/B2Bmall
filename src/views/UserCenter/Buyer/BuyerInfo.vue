<template>
  <div>
    <BuyerInfoHead></BuyerInfoHead>
    <div style="width: 55%;margin: 0px auto;margin-top: 20px">
      <el-form :inline="true" :model="form" class="demo-form-inline" label-position="left" :rules="rules" ref="form">
        <el-form-item label="id" label-width="100px" class="item">
          <el-input v-model="form.id" disabled></el-input>
        </el-form-item>
        <el-form-item label="账号" label-width="100px" class="item">
          <el-input v-model="form.username" disabled></el-input>
        </el-form-item>
        <el-form-item label="姓名" label-width="100px" prop="name" class="item">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="手机" label-width="100px" prop="tel" class="item">
          <el-input v-model="form.tel"></el-input>
        </el-form-item>
        <el-form-item label="QQ号" label-width="100px" class="item">
          <el-input v-model="form.qq"></el-input>
        </el-form-item>
        <el-form-item label="公司名称" label-width="100px" prop="company" class="item">
          <el-input v-model="form.company"></el-input>
        </el-form-item>
        <el-form-item label="公司地址" label-width="100px" prop="address" class="item">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="公司电话" label-width="100px" prop="companyTel" class="item">
          <el-input v-model="form.companyTel"></el-input>
        </el-form-item>
        <el-form-item label="客户类型" label-width="100px" class="item">
          <el-input v-model="form.type" disabled></el-input>
        </el-form-item>
        <el-form-item label="审核状态" label-width="100px" class="item">
          <el-input v-model="form.status" disabled></el-input>
        </el-form-item>
        <br/>
        <el-form-item>
          <el-button type="success" @click="saveUpdate('form')">保存更新</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script>
import Head from '@/components/Head'
import BuyerInfoHead from '@/views/UserCenter/Buyer/Head'
export default {
  name: 'BuyerInfo',
  components: { BuyerInfoHead, Head },
  data() {
    return {
      form: {
      },
      rules:{
        name: [
          { required: true, message: '请填写姓名', trigger: 'blur' }
        ],
        tel: [
          { required: true, message: '请填手机号码', trigger: 'blur' }
        ],
        company: [
          { required: true, message: '请填公司名称', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请填公司地址', trigger: 'blur' }
        ],
        companyTel: [
          { required: true, message: '请填公司电话', trigger: 'blur' }
        ],
      },
    }
  },
  methods:{
    saveUpdate(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: '保存成功',
            type: 'success'
          });
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
.item:nth-child(2n){
  float: right;
}
</style>
