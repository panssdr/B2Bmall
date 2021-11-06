<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"

    style="height: 100vh">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-user-solid"></i>
        <span>我的需求</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1" @click="$router.push('/UserCenter/MyDemand')">我的需求全部列表</el-menu-item>
        <el-menu-item index="1-2" @click="$router.push('/UserCenter/Quote')">客服报价</el-menu-item>
        <el-menu-item index="1-3" @click="$router.push('/UserCenter/Quote')">商家报价</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-s-order"></i>
        <span>我的订单</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="2-1" @click="$router.push('/UserCenter/MyOrder')">全部订单列表</el-menu-item>
        <el-menu-item index="2-2" @click="$router.push('/UserCenter/Contract')">全部合同列表</el-menu-item>
        <el-menu-item index="2-3" @click="$router.push('/UserCenter/PayDeposit')">支付定金</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-s-platform"></i>
        <span>我的样品</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="3-1">全部样品订单</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-s-finance"></i>
        <span>付款记录</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="4-1">全部付款记录</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-s-promotion"></i>
        <span>发货记录</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="5-1">全部发货记录</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="6">
      <template slot="title">
        <i class="el-icon-s-home"></i>
        <span>接收货物</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="6-1">全部接收记录</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="7">
      <template slot="title">
        <i class="el-icon-message-solid"></i>
        <span>退货记录</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="7-1">全部退货记录</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="8">
      <template slot="title">
        <i class="el-icon-s-custom"></i>
        <span>基本信息</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="8-1" @click="$router.push('/UserCenter/BuyerInfo')">基本信息维护</el-menu-item>
        <el-menu-item index="8-2" @click="$router.push('/UserCenter/AD')">认证资料</el-menu-item>
        <el-menu-item index="8-3" @click="$router.push('/UserCenter/Address')">收货地址</el-menu-item>
        <el-menu-item index="8-4" @click="$router.push('/UserCenter/ChangePwd')">修改密码</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'Buyer'
}
</script>

<style scoped>

</style>
