<template>
  <div>
<!--    <div class="header" style="margin-left: 70px; ">-->
<!--      <el-button type="success"  class="el-icon-check">审核通过</el-button>-->
<!--      <el-button type="danger" class="el-icon-close">审核不通过</el-button>-->
<!--    </div>-->
    <el-table :data="list" stripe style="margin: 0 auto">
      <el-table-column prop="id" label="ID"> </el-table-column>
      <el-table-column prop="type" label="手机号" width="180"> </el-table-column>
      <el-table-column prop="specifications" label="姓名"> </el-table-column>
      <el-table-column prop="priceAndAmount" label="公司名称" width="180"> </el-table-column>
      <el-table-column prop="amount" label="联系地址" width="180"> </el-table-column>
      <el-table-column prop="registerDate" label="注册日期" width="180"> </el-table-column>
      <el-table-column prop="registerType" label="注册类型"> </el-table-column>
      <el-table-column prop="status" label="审核状态"> </el-table-column>
      <el-table-column prop="isIndividual" label="客户类型"> </el-table-column>
      <el-table-column prop="auditorID" label="审核人ID"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template #default="scope">
          <el-popconfirm
            confirm-button-text='审核通过'
            cancel-button-text='审核不通过'
            icon="el-icon-info"
            icon-color="red"
            cancel-button-type="danger"
            @confirm="pass"
            @cancel="noPass"
          >
            <el-button slot="reference" type="text" size="small">审核</el-button>
          </el-popconfirm>
          <!--          <el-button @click="dialogFormVisible = true" type="text" size="small">我要报价</el-button>-->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import request from '@/api/request';
import Axios from 'axios';
export default {
  name: 'Customer',
  data(){
    return{
      list:[{}],
    }
  },
   mounted() {
   Axios.get("/api/customer/findAll").then(res=>
   {

     this.list=res.data

   }

   ).catch(res => console.log(res))

  },
  methods:{
    pass(){
      console.log("通过")
    },
    noPass(){
      console.log("不通过")
    }
  },
}
</script>

<style scoped>

</style>
