<template>
  <div style="width: 55%;margin: 0px auto;margin-top: 20px">
    <el-form :inline="true" :model="form" class="demo-form-inline" label-position="left" :rules="rules" ref="form">
      <el-form-item label="商品名称" label-width="100px" class="item">
        <el-input v-model="form.id"></el-input>
      </el-form-item>
      <el-form-item label="类别" label-width="100px" class="item">
        <el-select v-model="value1" placeholder="请选择">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <hr>
      <br>
      <el-form-item label="商品规格" label-width="100px" prop="name" class="item">
        <el-input v-model="form.spec"></el-input>
      </el-form-item>
      <el-form-item label="单价(元)" label-width="100px" prop="tel" class="item">
        <el-input v-model="form.price"></el-input>
      </el-form-item>
      <hr>
      <br>
      <el-form-item label="数量" label-width="100px" class="item">
        <el-input v-model="form.number"></el-input>
      </el-form-item>
      <el-form-item label="单位" label-width="100px" prop="company" class="item">
        <el-select v-model="value2" placeholder="请选择">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <hr>
      <br>
      <el-form-item label="商品描述" label-width="100px" prop="address" class="item">
        <el-input v-model="form.address" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="用途" label-width="100px" prop="companyTel" class="item">
        <el-input v-model="form.companyTel" type="textarea"></el-input>
      </el-form-item>
      <hr>
      <br>
      <el-form-item label="门幅(吋)" label-width="100px" class="item">
        <el-input v-model="form.type" ></el-input>
      </el-form-item>
      <el-form-item label="面料成分" label-width="100px" class="item">
        <el-input v-model="form.status" ></el-input>
      </el-form-item>
      <br/>
      <el-form-item>
        <el-button type="success" @click="saveUpdate('form')">新建更新</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'AddDemand',
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

</style>
