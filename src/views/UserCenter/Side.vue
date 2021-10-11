<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" style="margin-left: 20px">
    <el-tab-pane label="买方用户" name="first"><Buyer></Buyer></el-tab-pane>
    <el-tab-pane label="卖方用户" name="second">配置管理</el-tab-pane>
  </el-tabs>
</template>

<script>
import Buyer from '@/views/UserCenter/Buyer'
export default {
  name: 'Side',
  components: { Buyer },
  data() {
    return {
      activeName: 'first'
    };
  },
}
</script>

<style scoped>

</style>
