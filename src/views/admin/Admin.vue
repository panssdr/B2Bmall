<template>
  <el-container style="min-width: 1500px">
    <el-header style="padding: 0">
      <Header/>
    </el-header>
    <el-container style="margin-top: 20px">
      <el-aside width="200px" ><Aside/></el-aside>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container>
</template>

<script>

import Header from '@/views/admin/Header'
import Aside from '@/views/admin/Aside'
export default {
  name: 'Admin',
  components: { Aside, Header },
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
</style>
