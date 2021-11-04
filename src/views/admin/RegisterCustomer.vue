<template>
  <div style="width:30%;margin: 20px 20px">
    <el-form ref="form" :model="form" label-width="80px" size="mini" :rules="rules">
      <el-form-item label="手机号" >
        <el-input v-model="form.type"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.passWord"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="form.specifications"></el-input>
      </el-form-item>
      <el-form-item label="注册类型">
        <el-radio-group v-model="form.isIndividual">
          <el-radio label="公司客户"></el-radio>
          <el-radio label="个人客户"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="公司名称">
        <el-input v-model="form.priceAndAmount"></el-input>
      </el-form-item>
      <el-form-item label="公司地址">
        <el-input v-model="form.amount"></el-input>
      </el-form-item>
      <el-form-item label="公司电话">
        <el-input v-model="form.coTelephone"></el-input>
      </el-form-item>
      <el-form-item label="个人邮箱">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="固定电话">
        <el-input v-model="form.telephone"></el-input>
      </el-form-item>
      <el-form-item label="qq号">
        <el-input v-model="form.qq"></el-input>
      </el-form-item>
      <el-form-item label="微信号">
        <el-input v-model="form.wechatNum"></el-input>
      </el-form-item>
      <el-form-item label="联系地址">
        <el-input v-model="form.contactAddress"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(form)">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import request from '@/api/request'
export default {
  name: 'RegisterCustomer',
  data() {
    return {
      form: {
        specifications: '',
        priceAndAmount: '',
        type: '',
        amount: '',
        passWord: '',
        isIndividual: '',
        registerType:'1',
        priceAndAmount: '',
        amount: '',
        coTelephone:'',
        email:'',
        telephone:'',
        qq:'',
        wechatNum:'',
        contactAddress:''
      },
    }
  },
  methods: {
    onSubmit(formName) {
      if(formName.isIndividual==='公司客户'){
        formName.isIndividual=0
      }
       if(formName.isIndividual==='个人客户'){
        formName.isIndividual=1
      }
     request.post("/api/customer/registerByAdministrator",formName).catch(res => console.log(res))
    }
  }
}
</script>

<style scoped>

</style>
