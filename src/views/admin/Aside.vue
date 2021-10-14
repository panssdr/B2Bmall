<template>
    <el-row class="tac" >
        <el-col :span="12">
            <el-menu
                    :uniqueOpened="true"
                    :default-active="activeIndex"
                    class="el-menu-vertical-demo"
                    style="width: 400px;height: 100vh;float: left"
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-edit"></i>
                  <span>客户信息管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">客户(买家)管理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-edit"></i>
                  <span>购买意向管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">待处理购买意向</el-menu-item>
                  <el-menu-item index="2-2">全部购买意向</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-edit"></i>
                  <span>需求管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="3-1">新建需求</el-menu-item>
                  <el-menu-item index="3-2">需求管理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-edit"></i>
                  <span>询价管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="4-1">询价管理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-edit"></i>
                  <span>订单管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="5-1">待建合同订单</el-menu-item>
                  <el-menu-item index="5-2">待审核订单</el-menu-item>
                  <el-menu-item index="5-3">未过审核订单</el-menu-item>
                  <el-menu-item index="5-4">待确认订单</el-menu-item>
                  <el-menu-item index="5-5">待付定金订单</el-menu-item>
                  <el-menu-item index="5-6">待付款订单</el-menu-item>
                  <el-menu-item index="5-7">待收货订单</el-menu-item>
                  <el-menu-item index="5-7">已收货订单</el-menu-item>
                  <el-menu-item index="5-7">全部订单</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="6">
                <template slot="title">
                  <i class="el-icon-edit"></i>
                  <span>商家接单处理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="6-1">待发布报价</el-menu-item>
                  <el-menu-item index="6-2">待确认报价</el-menu-item>
                  <el-menu-item index="6-3">已确认报价</el-menu-item>
                  <el-menu-item index="6-4">历史报价信息</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="7">
                <template slot="title">
                  <i class="el-icon-edit"></i>
                  <span>后台技术员业务</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="7-1">询价分析</el-menu-item>
                  <el-menu-item index="7-2">询价报价审核</el-menu-item>
                  <el-menu-item index="7-3">报价审核管理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="8">
                <template slot="title">
                  <i class="el-icon-edit"></i>
                  <span>商家接单报价审核</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="8-1">待审核报价</el-menu-item>
                  <el-menu-item index="8-2">已审核报价管理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="9">
                <template slot="title">
                  <i class="el-icon-edit"></i>
                  <span>后台QC业务</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="8-1">注册商家</el-menu-item>
                  <el-menu-item index="7-2">询价报价审核</el-menu-item>
                  <el-menu-item index="7-3">报价审核管理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "Aside",
        data(){
            return{
                activeIndex: 1,
            }
        },
        created() {
            if (this.$route.path == "/teaLay/teaCourse"){
                this.activeIndex = 1;
            }else if (this.$route.path == "/teaLay/stuList"){
                this.activeIndex = 2;
            }else if (this.$route.path == "/teaLay/proLib"){
                this.activeIndex = 3;
            }
        },
        methods:{
            toCourse(){
                this.$router.push("/teaLay/teaCourse")
                console.log(this.$route.path)
            },
            toStudent(){
                this.$router.push("/teaLay/stuList")
            },
            toProblemLib(){
                this.$router.push("/teaLay/proLib")
            }
        }
    }
</script>

<style scoped>

</style>
