<template>
  <div>
    <div style="margin-left:80px;">
      <el-button class="el-icon-edit" type="text">修改</el-button>
      <el-button class="el-icon-delete" type="text">删除</el-button>
      <el-button class="el-icon-sort" type="text">发起询价</el-button>
      <el-button class="el-icon-circle-close" type="text">停止流转</el-button>
    </div>
    <el-table :data="list" stripe style="width: 90%;margin: 0 auto" @row-click="getId">
      <el-table-column prop="id" label="需求ID"> </el-table-column>
      <el-table-column prop="customerID" label="客户ID"> </el-table-column>
      <el-table-column prop="goodsName" label="需求名称"> </el-table-column>
      <el-table-column prop="specifications" label="需求规格"> </el-table-column>
      <el-table-column prop="descript" label="需求描述" width="180"> </el-table-column>
      <el-table-column prop="price" label="需求数量"> </el-table-column>
      <el-table-column prop="amount" label="创建日期"> </el-table-column>
      <el-table-column prop="staffID" label="客服号"> </el-table-column>
      <el-table-column prop="supplyID" label="供应ID"> </el-table-column>
      <el-table-column prop="categoryID1" label="商品类别"> </el-table-column>
      <el-table-column prop="status" label="处理状态"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template #default="scope">
          <el-button @click="quote(scope.row)" type="text" size="small">下架</el-button>
<!--          <el-button @click="quote(scope.row)" type="text" size="small">上架</el-button>-->
          <!--          <el-button @click="dialogFormVisible = true" type="text" size="small">我要报价</el-button>-->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'DemandManage',
  data(){
    return{
      list:[{}]
    }
  },
  methods:{
    getId(row){
      console.log(row.id)
    }
  },
  mounted(){
    Axios.get("/api/demand/deMan").then(res => {
      this.list=res.data
      if( this.list.status=='0'){
         this.list.status="待接单"
      }else if( this.list.status==1){
         this.list.status="正在处理"
      }else if( this.list.status==2){
         this.list.status="已报价"
      }else if( this.list.status==4){
         this.list.status="以结束"
      }
      }).catch( res => console.log(res))
  }
}
</script>

<style scoped>

</style>
