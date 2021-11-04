<template>
  <div>
    <el-table :data="list" stripe style="width: 90%;margin: 0 auto">
      <el-table-column type="selection" width="50"> </el-table-column>
      <el-table-column prop="id" label="ID"> </el-table-column>
      <el-table-column prop="phone" label="手机号" width="180"> </el-table-column>
      <!-- <el-table-column prop="url1" label="图片"> </el-table-column> -->
      <el-table-column prop="demandDescript" label="需求描述" width="180"> </el-table-column>
      <el-table-column prop="createDate" label="创建日期" width="180"> </el-table-column>
      <el-table-column prop="lockDate" label="处理日期" width="180"> </el-table-column>
      <el-table-column prop="staffID" label="客服号"> </el-table-column>
      <!-- <el-table-column prop="status" label="处理状态"> </el-table-column> -->
      <el-table-column fixed="right" label="操作" width="100">
        <template #default="scope">
          <el-button @click="quote(scope.row)" type="text" size="small">锁定</el-button>
          <!--          <el-button @click="dialogFormVisible = true" type="text" size="small">我要报价</el-button>-->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import request from '@/api/request'
import Axios from 'axios'
export default {
  name: 'PurchaseIntention',
  data(){
    return{
      list:[{}]
    }
  },
  mounted(){
    Axios.get("/api/demandintent/findAllPurlnt").then(
      res =>  this.list=res.data
    )
  }
}
</script>

<style scoped>

</style>
