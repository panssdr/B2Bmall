<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    unique-opened="true"
    style="height: 100vh">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-s-shop"></i>
        <span>我的商品</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">全部商品列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-s-order"></i>
        <span>主动接单</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="2-1">全部接单列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-s-platform"></i>
        <span>供求报价单</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="3-1">报价单列表</el-menu-item>
        <el-menu-item index="3-2">报价管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-s-finance"></i>
        <span>我的订单</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="4-1">全部订单列表</el-menu-item>
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
        <i class="el-icon-s-custom"></i>
        <span>基本信息</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="6-1">基本信息维护</el-menu-item>
        <el-menu-item index="6-2">认证资料</el-menu-item>
        <el-menu-item index="6-3">商家联系人</el-menu-item>
        <el-menu-item index="6-4">修改密码</el-menu-item>
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
