<template>
  <div>
    <div class="header" style="margin-left: 70px; ">
      <el-button type="success"  class="el-icon-check">审核通过</el-button>
      <el-button type="danger" class="el-icon-close">审核不通过</el-button>
    </div>
    <el-table :data="list" stripe style="width: 90%;margin: 0 auto">
      <el-table-column type="selection" width="50"> </el-table-column>
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
      list:[],
    }
  },
   mounted() {
   Axios.get("/api/customer/findAll").then(res=>
   {

     this.list=res.data

   }

   ).catch(res => console.log(res))

  }
}
</script>

<style scoped>

</style>
