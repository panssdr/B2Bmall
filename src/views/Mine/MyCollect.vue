<template>
    <div>
        <Head></Head>
        <div class="collect-title">
            <div class="w1200">
                <p>
                    <span @click="goback"><i class="el-icon-back"></i>个人中心</span>
                    <span @click='change(1)' :class="act==1?'act':''">产品收藏</span>
                    <span @click='change(2)' :class="act==2?'act':''">店铺收藏</span>
                </p>
            </div>
        </div>
        <div class="collect-main-pro w1200" v-if="act == 1">
            <ul class="flex-b">
                <li v-for="item in 12">
                    <p><img src="" alt="" /></p>
                    <p>博世阀组件 F00RJ01692,727,005</p>
                    <p>￥55</p>
                </li>
            </ul>
        </div>
        <div class="collect-main-store w1200" v-if="act == 2">
            <ul>
                <li v-for="item in 8" class="flex-b">
                    <div>
                        <p>无锡诺普特汽车零部件有限公司</p>
                        <p>所在地： 梁溪区锡沪路555号</p>
                        <p>店铺</p>
                        <p>商家主打：无锡油嘴 柱塞 喷油器</p>
                    </div>
                    <div>
                        <p>进入店铺>></p>
                        <ul class="flex-b">
                            <li v-for="item in 3">
                                <img src="" alt="" />
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Head from "@/components/Head.vue";
export default {
    components: {
        Head,
    },
    methods: {
        goback() {
            this.$router.push("/Mine");
        },
        change(n){
            if(n==1){
                this.act =1
            }else if(n==2){
                this.act =2
            }
        },
    },
    data() {
        return {
            type: "stroe",
            act:1,
        };
    },
};
</script>
<style lang="scss" scoped>
.collect-title {
    color: #fff;
    background-color: #2d82ff;
    height: 60px;
    > div {
        > p {
            line-height: 60px;
            i {
                font-size: 20px;
                margin-right: 20px;
            }
            span {
                cursor: pointer;
                display: inline-block;
                &:first-child {
                    &::after {
                        content: "|";
                        margin-left: 20px;
                    }
                }
                &:not(:first-child) {
                    text-align: center;
                    width: 100px;
                    height: 60px;
                    margin-left: 20px;
                    &:hover {
                        background-color: #1a72f7;
                    }
                }
            }
            .act{
                 background-color: #1a72f7;
            }
        }
    }
}

.collect-main-store {
    > ul {
        > li {
            margin-top: 20px;
            height: 180px;
            border: 1px solid #e4e4e4;
            div {
                &:first-child {
                    p {
                        font-size: 14px;
                        padding: 10px 20px;
                        &:nth-child(3) {
                            padding: 0;
                            margin-left: 20px;
                            height: 25px;
                            width: 50px;
                            color: #fff;
                            background-color: #2d82ff;
                            text-align: center;
                            line-height: 25px;
                        }
                    }
                }
                &:last-child {
                    padding: 0 20px;
                    background-color: #f5f5f5;
                    p {
                        padding: 10px;
                    }
                    img {
                        width: 120px;
                        height: 120px;
                        margin-right: 10px;
                    }
                }
            }
        }
    }
}

.collect-main-pro {
    ul {
        flex-wrap: wrap;
        li {
            text-align: center;
            margin-top: 20px;
            width: 250px;
            img {
                width: 180px;
                height: 180px;
            }
            p {
                &:nth-child(2) {
                    margin-top: 10px;
                }
                &:last-child {
                    color: #f60;
                }
            }
        }
    }
}
</style>
