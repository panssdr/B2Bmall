<template>
  <div style="width:30%;margin: 20px 20px">
    <el-form ref="form" :model="form" label-width="80px" size="mini" :rules="rules">
      <el-form-item label="手机号" prop="tel">
        <el-input v-model="form.tel"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="注册类型">
        <el-radio-group v-model="form.resource">
          <el-radio label="公司客户"></el-radio>
          <el-radio label="个人客户"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="公司名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="公司地址">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="公司电话">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="公司传真">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="个人邮箱">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="固定电话">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="职位">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="qq号">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="微信号">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="联系地址">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'RegisterCustomer',
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules:{
        name: [
          { required: true, message: '请填写姓名', trigger: 'blur' }
        ],
        tel: [
          { required: true, message: '请填写密码', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填公司名称', trigger: 'blur' }
        ],
      },
    }
  },
  methods: {
    onSubmit(formName) {
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
    }
  }
}
</script>

<style scoped>

</style>
