<template>
  <div class="product">
    <Head></Head>
    <Search></Search>
    <Nav></Nav>

    <div class="w1200" style="margin-top: 20px;margin-bottom: 20px">
      <el-tag type="warning" size="big" style="margin-top: 10px">所有需求产品</el-tag>
      <Demand :demandList="demandList"></Demand>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage1"
        :page-sizes="[10, 20]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="demandList"
      >
      </el-pagination>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import axios from "axios"
import Demand from '@/views/Home/Demand'
import Head from '@/components/Head'
import Search from '@/views/Home/Search'
import Foot from '@/components/Foot'
import Nav from '@/views/Home/Nav'
export default {
  name: 'AllDemand',
  components: { Nav, Foot, Search, Head, Demand },
  data() {
    return {
      demandList:[],
      currentPage: 1,
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
    axios.get("/api/demand/all").then(res=> {
      this.demandList=res.data
      // console.log(demandList);
      })
  },
}
</script>

<style scoped>

</style>
