<template>
  <div>
    <BuyerInfoHead></BuyerInfoHead>
    <div style="width: 90%;margin: 0 auto">
      <div style="background-color: #efefef;height: 40px;width: 100%">
        <p style="color: red;text-align: center;line-height: 40px">修改密码</p>
      </div>
      <div style="height: 40px;width: 100%"></div>
      <el-form :model="form" class="demo-form-inline" label-position="left" :rules="rules" ref="form">
        <div style="background-color: #efefef;height: 60px;width: 100%">
          <el-form-item label="原始密码" label-width="100px" prop="oldPwd" style="margin-left: 20%;margin-right: 50%">
            <el-input v-model="form.oldPwd" size="small"></el-input>
          </el-form-item>
        </div>
        <div style="height: 60px;width: 100%">
          <el-form-item label="新的密码" label-width="100px" prop="newPwd" style="margin-left: 20%;margin-right: 50%">
            <el-input v-model="form.newPwd" size="small" placeholder="长度为6-12"></el-input>
          </el-form-item>
        </div>
        <div style="background-color: #efefef;height: 60px;width: 100%">
          <el-form-item label="确认密码" label-width="100px" prop="confirmPwd" style="margin-left: 20%;margin-right: 50%">
            <el-input v-model="form.confirmPwd" size="small" placeholder="与新密码相同"></el-input>
          </el-form-item>
        </div>
        <el-form-item>
          <el-button type="success" @click="saveUpdate('form')" size="small" style="margin-left: 28%">确认修改</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import BuyerInfoHead from '@/views/UserCenter/Buyer/BuyerInfoHead'
export default {
  name: 'ChangePwd',
  components: { BuyerInfoHead },
  data(){
    return{
      form:{},
      rules:{
        oldPwd: [
          { required: true, message: '请填写原始密码', trigger: 'blur' }
        ],
        newPwd: [
          { required: true, message: '请填写新的密码', trigger: 'blur' }
        ],
        confirmPwd: [
          { required: true, message: '请填写确认密码', trigger: 'blur' }
        ],
      },
    }
  },
  methods:{
    saveUpdate(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: '修改成功',
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
