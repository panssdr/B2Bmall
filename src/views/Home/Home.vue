<template>
    <div class="home">
        <Head></Head>
        <Search></Search>
        <div class="bg-f5">
            <Nav></Nav>
            <Banner></Banner>
            <AdImg></AdImg>
        </div>
        <div class="w1200">
          <div>
            <el-tag type="warning" size="big" style="margin-top: 10px">需求产品</el-tag>
            <el-tag type="success" size="big" style="margin-top: 10px;float: right;cursor: pointer" @click="MoreDemand">查看更多>></el-tag>
          </div>
          <el-divider></el-divider>
          <div style="margin-bottom: 20px">
            <Demand :demandList="demandList" ></Demand>
          </div>
        </div>
        <div class="bg-f5" style="height: 50px"></div>
        <div class="w1200">
        <div>
          <el-tag size="big" style="margin-top: 10px">热销产品</el-tag>
          <el-tag type="success" size="big" style="margin-top: 10px;float: right;cursor: pointer" @click="MoreProvide">查看更多>></el-tag>
        </div>
        <el-divider></el-divider>
          <div style="margin-bottom: 20px">
            <Provide :supplyList="supplyList"></Provide>
          </div>
      </div>
        <!-- <ForYou></ForYou> -->
        <!--  删除该位置 -->
        <section class="guess w1200">
            <p>猜你喜欢</p>
            <Guess></Guess>
        </section>
        <Foot></Foot>
    </div>
</template>

<script>
// import { getApi } from "../../assets/js/getApi.js";
import axios from 'axios';
import Head from "@/components/Head.vue";
import Foot from "@/components/Foot.vue";
import Search from "@/views/Home/Search.vue";
import Nav from "@/views/Home/Nav.vue";
import Banner from "@/views/Home/Banner.vue";
import AdImg from "@/views/Home/AdImg.vue";
import Guess from "@/views/Home/Guess.vue";
import ForYou from "@/views/Home/ForYou.vue";
import Demand from '@/views/Home/Demand'
import Provide from '@/views/Home/Provide'
export default {
    name: "Home",
    components: {
      Provide,
      Demand,
        Head,
        Foot,
        Search,
        Nav,
        Banner,
        AdImg,
        Guess,
        ForYou,
    },
    data(){
      return{
        demandList:[],
        supplyList:[]
      }
    },
    mounted() {

    axios.get("/api/demand/homeDemand").then(res=> {
      this.demandList=res.data
      // console.log(demandList);
      })

    axios.get("/api/supply/homeSupply").then(res=> {
      this.supplyList=res.data
      // console.log(demandList);
      })
    },
    methods: {
      MoreDemand(){
        // console.log("查看更多需求")
        this.$router.push("/Demand")
      },
      MoreProvide(){
        this.$router.push("/Provide")
      }
    },
};
</script>
<style lang="scss" scoped>
.guess {
    > p {
        padding: 30px;
        color: #2c3e50;
        text-align: center;
        font-weight: bold;
        font-size: 26px;
    }
}
</style>
