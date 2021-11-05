<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" style="margin-left: 20px">
    <el-tab-pane label="买方用户" name="first"><Buyer></Buyer></el-tab-pane>
    <el-tab-pane label="卖方用户" name="second"><Seller></Seller></el-tab-pane>
  </el-tabs>
</template>

<script>
import Buyer from '@/views/UserCenter/Buyer'
import Seller from '@/views/UserCenter/Seller'
export default {
  name: 'Side',
  components: { Seller, Buyer },
  data() {
    return {
      activeName: 'first'
    };
  },
  methods:{
    handleClick(){
      if (this.activeName === 'first'){
        this.activeName = 'second';
      }else {
        this.activeName = 'first';
      }
    }
  }
}
</script>

<style scoped>

</style>
