<template>
    <div class="product">
        <Head></Head>
        <div class="m-title">
            <h4 class="w1200">购物车</h4>
        </div>
        <div class="main flex-b  w1200 ">
            <el-card class="box-card" shadow="never">
                <div slot="header" class="clearfix">
                    <h3>全部功能</h3>
                </div>
                <ul class="text item">
                   <li :class="act == 4 ? 'font-b' : ''" @click="go(4)">
                        我的购物车 <i class="el-icon-arrow-right"></i>
                    </li>
                    <li :class="act == 1 ? 'font-b' : ''" @click="go(1)">
                        我的订单 <i class="el-icon-arrow-right"></i>
                    </li>
                    <!-- <li :class="act == 2 ? 'font-b' : ''" @click="go(2)">
                        地址管理 <i class="el-icon-arrow-right"></i>
                    </li>
                    <li :class="act == 3 ? 'font-b' : ''" @click="go(3)">
                        我的收藏 <i class="el-icon-arrow-right"></i>
                    </li> -->
                    <!-- <li :class="act == 4 ? 'font-b' : ''" @click="go(4)">
                        我的购物车 <i class="el-icon-arrow-right"></i>
                    </li> -->
                    <!-- <li :class="act == 5 ? 'font-b' : ''" @click="go(5)">
                        消息管理 <i class="el-icon-arrow-right"></i>
                    </li> -->
                </ul>
            </el-card>
            <div>
                <component :is="curentView"></component>
            </div>
        </div>
        <Foot></Foot>
    </div>
</template>
<script>
import Head from "@/components/Head.vue";
import Foot from "@/components/Foot.vue";
const MyOrder = () => import("../Mine/MineFun");
const MyAdd = () => import("../Mine/Add");
const ShoppingCar = () => import("../Mine/ShoppingCar");
const MyCollect = () => import("../Mine/MyCollect");
export default {
    name: "Mine",
    components: {
        Head,
        Foot,
        MyOrder,
        MyAdd,
        ShoppingCar,
        MyCollect,
    },
    data() {
        return {
            act: 4,
            curentView:'ShoppingCar'
        };
    },
    methods: {
        go(num) {
            switch (num) {
                case 1:
                    this.act = num;
                    this.curentView='MyOrder';
                    break;
                case 2:
                    this.act = num;
                    this.curentView='MyAdd';
                    break;
                case 3:
                    this.act = num;
                    this.$router.push("/MyCollect");
                    break;
                case 4:
                    this.act = num;
                    this.curentView='ShoppingCar';
                    break;
                // case 5:
                //     this.act = num;
                //     break;
            }
        },
    },
};
</script>
<style lang="scss" scoped>
.m-title {
    background-color: #2d82ff;
    height: 60px;
    line-height: 60px;
    font-size: 30px;
    font-weight: bold;
    color: #fff;
}
.main {
    padding: 40px 0;
    min-height: 600px;
    > div {
        &:first-child {
            margin-right: 40px;
            flex: 1;
            li {
                margin: 15px 0;
                margin-left: 20px;
                cursor: pointer;
                &:hover {
                    color: #2d82ff;
                }
            }
        }
        &:last-child {
            flex: 5;
        }
    }
}
</style>
