<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    unique-opened="true"
    style="height: 100vh">
    <el-submenu index="9">
      <template slot="title">
        <i class="el-icon-s-shop"></i>
        <span>我的商品</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="9-1">全部商品列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="10">
      <template slot="title">
        <i class="el-icon-s-order"></i>
        <span>主动接单</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="10-1">全部接单列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="11">
      <template slot="title">
        <i class="el-icon-s-platform"></i>
        <span>供求报价单</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="11-1" @click="$router.push('/UserCenter/Quotation')">报价单列表</el-menu-item>
        <el-menu-item index="11-2">报价管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="12">
      <template slot="title">
        <i class="el-icon-s-finance"></i>
        <span>我的订单</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="12-1">全部订单列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="13">
      <template slot="title">
        <i class="el-icon-s-promotion"></i>
        <span>发货记录</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="13-1">全部发货记录</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="14">
      <template slot="title">
        <i class="el-icon-s-custom"></i>
        <span>基本信息</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="14-1">基本信息维护</el-menu-item>
        <el-menu-item index="14-2">认证资料</el-menu-item>
        <el-menu-item index="14-3">商家联系人</el-menu-item>
        <el-menu-item index="14-4">修改密码</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'Seller'
}
</script>

<style scoped>

</style>
