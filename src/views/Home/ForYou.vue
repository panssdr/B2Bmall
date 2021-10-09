<template>
    <section class="foryou">
        <div class="w1200">
            <p>为你推荐</p>
            <article>
                <div class="foryou-active">
                    <div class="foryou-title flex-b">
                        <span>活跃商家</span>
                        <span> 查看更多 </span>
                    </div>
                    <ul class="foryou-active-content">
                        <li v-for="item in store" :key="item">
                            <p>
                                <i class="el-icon-potato-strips"></i
                                ><a href="#">
                                    {{item.company}} <em>旺铺</em><span class="color_o">1</span> 年</a
                                >
                            </p>
                            <p>主营产品:{{item.main_product}} </p>
                        </li>
                    </ul>
                </div>
                <div class="foryou-hot">
                    <div class="foryou-title flex-b">
                        <span>热门产品</span>
                        <span> 查看更多 </span>
                    </div>
                    <ul>
                        <li v-for="(item,i) in hotproduct" :key="i">
                            <a href="#"><img :src="item.logo" alt=""/></a>
                            <a href="#">
                                <p>{{item.title}}</p>
                                <p>￥{{item.price}}</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="foryou-inquiry">
                    <div class="foryou-title flex-b">
                        <span>询价</span>
                        <span><em>我要询价</em> </span>
                    </div>
                    <ul>
                        <li v-for="(item, i) in hotproduct" :key="i">
                            <a href="#"
                                ><span>{{ i + 1 }}</span></a
                            >
                            <a href="#">
                                  <p>{{item.title}}</p>
                                <p class="color-o mt10">￥{{item.price}}</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </article>
        </div>
    </section>
</template>
<script>

export default {
    name: "ForYou",
    data() {
        return {
            store:[],
            hotproduct:[],
        }
    },
}
</script>
<style lang="scss" scoped>
.foryou {
    background-color: #e7e7e7;
    .w1200 > p {
        padding: 30px;
        color: #2c3e50;
        text-align: center;
        font-weight: bold;
        font-size: 26px;
    }
    article {
        display: flex;
        justify-content: space-between;
        > div {
            height: 400px;
            width: 380px;
            font-size: 14px;
            background-color: #fff;
            padding: 30px 10px;
            margin-bottom: 40px;
            .foryou-title {
                height: 20px;
                line-height: 20px;
                padding: 0 10px;
                border-left: 5px solid #f60;
            }
            .foryou-active-content li {
                margin-left: 10px;
                margin-top: 20px;
                p {
                    &:nth-child(1) {
                        margin-left: 10px;
                    }
                    &:nth-child(2) {
                        color: rgb(153, 153, 153);
                        margin-left: 40px;
                    }
                }
                img {
                    height: 20px;
                    width: 20px;
                }
            }
        }
        .foryou-hot ul li {
            margin-left: 10px;
            margin-top: 10px;
            display: flex;
            a {
                &:first-child {
                    img {
                        height: 55px;
                        width: 55px;
                    }
                }
                &:last-child {
                    margin-left: 20px;
                    p {
                        margin-bottom: 10px;
                    }
                }
            }
        }

        .foryou-inquiry ul li {
            display: flex;
            margin-top: 15px;
            a {
                padding: 5px;
                &:first-child {
                    padding-top: 15px;
                    span {
                        padding: 5px;
                        color: #fff;
                        font-weight: 600;
                        background-color: #d4d4d4;
                        border-radius: 4px;
                    }
                }

                &:last-child {
                    margin-left: 20px;
                }
            }
        }
    }
    em {
        padding: 0 3px;
        color: #fff;
        background-color: #f60;
        text-align: center;
        border-radius: 5px;
    }
}
</style>
