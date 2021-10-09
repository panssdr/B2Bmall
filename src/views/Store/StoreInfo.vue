<template>
    <div class="store">
        <Head></Head>
        <Search></Search>
        <section class="store_menu">
            <div class="w1200">
                <ul>
                    <li @click="change(1)" :class="act == 1 ? 'act' : ''">店铺首页</li>
                    <li @click="change(2)" :class="act == 2 ? 'act' : ''">供应产品</li>
                    <li @click="change(3)" :class="act == 3 ? 'act' : ''">公司介绍</li>
                    <li @click="change(4)" :class="act == 4 ? 'act' : ''">在线留言</li>
                    <li @click="change(5)" :class="act == 5 ? 'act' : ''">联系方式</li>
                </ul>
            </div>
        </section>
        <div class="hr"></div>
        <div class="w1200" style="marign:20px " v-if="act == 1">
            <el-carousel height="400px" direction="vertical" :autoplay="false">
                <el-carousel-item v-for="item in 3" :key="item">
                    <h3 class="medium">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div v-if="act != 1" class="p20"></div>
        <div class="pro flex-l w1200">
            <div class="bBox">
                <img
                    src="https://img.alicdn.com/imgextra/i3/1709365317/O1CN01zAmiVp1p9EQiflXnM_!!1709365317-0-daren.jpg_300x300.jpg"
                />
                <div class="sbox"></div>
                <div class="showbox">
                    <img
                        src="https://img.alicdn.com/imgextra/i3/1709365317/O1CN01zAmiVp1p9EQiflXnM_!!1709365317-0-daren.jpg_300x300.jpg"
                        alt=""
                    />
                </div>
            </div>
            <div>
                <p>博世阀组件，F00RJ01692,727,005</p>
                <p>
                    <span>价格</span>
                    <span>￥55.00</span>
                </p>
                <p><span>型号</span><span>F00RJ01692</span></p>
                <p><span>品牌</span><span>博世</span></p>
                <p><span>运费</span><span>自费</span></p>
                <p>
                    <span>采购量</span
                    ><span>
                        <el-input-number
                            v-model="num"
                            :min="1"
                            :max="10"
                            size="small"
                            label="描述文字"
                        ></el-input-number
                    ></span>
                </p>
                <p><span></span><span>立即订购</span><span>加入订购</span><span>收藏</span></p>
            </div>
        </div>
        <section class="content flex-b w1200">
            <div>
                <StoreBiside></StoreBiside>
            </div>
            <div>
                <component :is="curentView"></component>
            </div>
        </section>
        <Foot></Foot>
    </div>
</template>
<script>
import Head from "../../components/Head";
import Foot from "../../components/Foot";
import Search from "../Home/Search";
import StoreIndex from "../Store/StoreIndex";
import StoreBiside from "../Store/StoreBiside";
const StoreProduct = () => import("../Store/StoreProduct");
// import StoreProduct from "../Store/StoreProduct";
const StoreCom = () => import("../Store/StoreCom");
// import StoreCom from "../Store/StoreCom";
const StoreCon = () => import("../Store/StoreCon");
// import StoreCon from "../Store/StoreCon";
const StoreMsg = () => import("../Store/StoreMsg");
// import StoreMsg from "../Store/StoreMsg";
export default {
    name: "Store",
    data() {
        return {
            curentView: "StoreIndex",
            act: 2,
            num: 1,
        };
    },
    mounted() {
        this.change(this.act);
        let showbox =document.querySelector(".showbox")
        let sbox =document.querySelector(".sbox")

        document.querySelector(".bBox img").addEventListener("mouseover", function() {
            showbox.style.display = "block";
            sbox.style.display = "block";
        });
        document.querySelector(".bBox img").addEventListener("mouseout", function() {
            showbox.style.display = "none";
            sbox.style.display = "none";
        });
        document.querySelector(".bBox img").addEventListener("mousemove", function(e) {
            let box = document.querySelector(".bBox");
            let box1 = document.querySelector(".sbox");
            let box2 = document.querySelector(".showbox");
            let x = e.pageX - box.offsetLeft;
            let y = e.pageY - box.offsetTop;
            let box1X = x - box1.offsetWidth / 2;
            let box1Y = y - box1.offsetHeight / 2;
            //  如果x 坐标小于了0 就让他停在0 的位置
            let box1Max = box.offsetWidth - box1.offsetWidth;
            if (box1X <= 0) {
                box1X = 0;
            } else if (box1X >= box1Max) {
                box1X = box1Max;
            }
            if (box1Y <= 0) {
                box1Y = 0;
            } else if (box1Y >= box1Max) {
                box1Y = box1Max;
            }

            box1.style.left = box1X + "px";
            box1.style.top = box1Y + "px";

            let box2IMg = document.querySelector(".showbox img");
            let box2Max = box2.offsetWidth;
            let box2X = (box1X * box2Max) / box1Max;
            let box2Y = (box1Y * box2Max) / box1Max;
            box2IMg.style.left = -box2X + "px";
            box2IMg.style.top = -box2Y + "px";
        });
    },
    methods: {
        mouseMove(e) {},
        change(i) {
            switch (i) {
                case 1:
                    this.curentView = "StoreIndex";
                    this.act = 1;
                    break;
                case 2:
                    this.curentView = "StoreProduct";
                    this.act = 2;
                    break;
                case 3:
                    this.curentView = "StoreCom";
                    this.act = 3;
                    break;
                case 4:
                    this.curentView = "StoreMsg";
                    this.act = 4;
                    break;
                case 5:
                    this.curentView = "StoreCon";
                    this.act = 5;
                    break;
            }
        },
    },
    components: {
        Head,
        Search,
        Foot,
        StoreIndex,
        StoreBiside,
        StoreProduct,
        StoreCom,
        StoreCon,
        StoreMsg,
    },
};
</script>
<style lang="scss" scoped>
.w890 {
    width: 890px;
}
.p20 {
    padding: 20px;
}
.sbox {
    display: none;
    position: absolute;
    z-index: 10;
    top: 0px;
    left: 0px;
    width: 200px;
    height: 200px;
    background-color: #2d81ff5b;
}
.showbox {
    // display: none;
    position: absolute;
    top: 0px;
    left: 400px;
    width: 400px;
    height: 400px;
    background-color: rgb(233, 162, 162);
    z-index: 10;
    overflow: hidden;
    > img {
        position: absolute;
        top: 0;
        left: 0;
        width: 200%;
        height: 200%;
    }
}
.pro {
    height: 450px;
    > div {
        &:first-child {
            position: relative;
            height: 400px;
            > img {
                width: 400px;
                height: 400px;
            }
        }
        &:last-child {
            width: 520px;
            margin-left: 70px;
            font-size: 14px;
            p {
                > span {
                    display: inline-block;
                    &:first-child {
                        width: 100px;
                    }
                }
                padding-left: 20px;
                margin: 10px 0;
                &:first-child {
                    padding-left: 0;

                    font-weight: bold;
                    font-size: 16px;
                }
                &:nth-child(2) {
                    height: 70px;
                    background-color: #fff5ec;
                    span {
                        line-height: 70px;
                        &:last-child {
                            color: #ff0000;
                            font-size: 20px;
                        }
                    }
                }
                &:last-child {
                    span {
                        cursor: pointer;
                        &:not(:first-child) {
                            width: 120px;
                            height: 40px;
                            line-height: 40px;
                            text-align: center;
                            margin-right: 10px;
                        }

                        &:nth-child(2) {
                            color: #fff;
                            background-color: #f60;
                            font-weight: bold;
                        }
                        &:nth-child(3) {
                            color: #f60;
                            background-color: #ffebe7;
                            font-weight: bold;
                        }
                        &:nth-child(4) {
                            background-color: #f5f5f5;
                        }
                    }
                }
            }
        }
    }
}
.store_menu {
    height: 50px;
    background-color: #f4f4f4;
    ul {
        display: flex;
        li {
            height: 50px;
            width: 140px;
            line-height: 50px;
            text-align: center;
            cursor: pointer;
            &:hover {
                color: #fff;
                background-color: #2d82ff;
            }
        }
    }
}
.act {
    color: #fff;
    background-color: #2d82ff;
}
.content {
    div {
        &:first-child {
        }
        &:last-child {
        }
    }
}
</style>
