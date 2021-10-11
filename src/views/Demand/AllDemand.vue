<template>
  <div class="product">
    <Head></Head>
    <Search></Search>
    <Nav></Nav>

    <div class="w1200" style="margin-top: 20px;margin-bottom: 20px">
      <el-tag type="warning" size="big" style="margin-top: 10px">所有需求产品</el-tag>
      <Demand></Demand>
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
}
</script>

<style scoped>

</style>
