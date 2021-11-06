<template>
    <el-row class="tac" >
        <el-col :span="12">
            <el-menu
                    router
                    :uniqueOpened="true"
                    :default-active="this.$router.path"
                    class="el-menu-vertical-demo"
                    style="width: 400px;height: 100vh;float: left"
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-edit"></i>
                  <span>客户信息管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/admin/reCus">注册客户(买家)</el-menu-item>
                  <el-menu-item index="/admin/Customer">客户(买家)管理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-edit"></i>
                  <span>购买意向管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/admin/PurInt">待处理购买意向</el-menu-item>
                  <el-menu-item index="/admin/AllPurInt">全部购买意向</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-edit"></i>
                  <span>需求管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/admin/AddDM">新建需求</el-menu-item>
                  <el-menu-item index="/admin/DeMan">需求管理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-edit"></i>
                  <span>询价管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/admin/RM">询价管理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-edit"></i>
                  <span>订单管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/admin/BC">待建合同订单</el-menu-item>
                  <el-menu-item index="5-2">待审核订单</el-menu-item>
                  <el-menu-item index="5-3">未过审核订单</el-menu-item>
                  <el-menu-item index="5-4">待确认订单</el-menu-item>
                  <el-menu-item index="5-5">待付定金订单</el-menu-item>
                  <el-menu-item index="5-6">待付款订单</el-menu-item>
                  <el-menu-item index="5-7">待收货订单</el-menu-item>
                  <el-menu-item index="5-8">已收货订单</el-menu-item>
                  <el-menu-item index="5-9">全部订单</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="6">
                <template slot="title">
                  <i class="el-icon-edit"></i>
                  <span>商家接单处理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/admin/PQ">待发布报价</el-menu-item>
                  <el-menu-item index="/admin/CQ">待确认报价</el-menu-item>
                  <el-menu-item index="/admin/ACQ">已确认报价</el-menu-item>
                  <el-menu-item index="/admin/AQI">历史报价信息</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="7">
                <template slot="title">
                  <i class="el-icon-edit"></i>
                  <span>后台技术员业务</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/admin/IA">询价分析</el-menu-item>
                  <el-menu-item index="/admin/RAQ">询价报价审核</el-menu-item>
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
                  <el-menu-item index="9-1">注册商家</el-menu-item>
                  <el-menu-item index="/admin/IM">询价管理</el-menu-item>
                  <el-menu-item index="9-3">报价管理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="10">
                <template slot="title">
                  <i class="el-icon-edit"></i>
                  <span>询价报价审核</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/admin/SRAQ">待审核报价</el-menu-item>
                  <el-menu-item index="10-2">已审核报价</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="11">
                <template slot="title">
                  <i class="el-icon-edit"></i>
                  <span>订单合同审核</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/admin/RC">待审核订单合同</el-menu-item>
                  <el-menu-item index="11-2">已审核订单合同</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="12">
                <template slot="title">
                  <i class="el-icon-edit"></i>
                  <span>应收业务</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/admin/Collection">收款确认</el-menu-item>
                  <el-menu-item index="/admin/CM">收款确认管理</el-menu-item>
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
