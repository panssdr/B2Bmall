<template>
  <div class="product">
    <Head></Head>
    <Search></Search>
    <Nav></Nav>
    <div class="w1200" style="margin-top: 20px;margin-bottom: 20px">
      <el-tag size="big" style="margin-top: 10px">所有热销产品</el-tag>
      <Provide :supplyList="supplyList"></Provide>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage1"
        :page-sizes="[10, 20]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="100"
      >
      </el-pagination>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import axios from "axios"

import Head from '@/components/Head'
import Search from '@/views/Home/Search'
import Foot from '@/components/Foot'
import Nav from '@/views/Home/Nav'
import Provide from '@/views/Home/Provide'
export default {
  name: 'AllProvide',
  components: { Provide, Nav, Foot, Search, Head },
  data() {
    return {
      supplyList:[],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
  },
   mounted(){
    axios.get("/api/supply/all").then(res=> {
      this.supplyList=res.data
      console.log(this.supplyList);
      })
  },
}
</script>

<style scoped>

</style>
