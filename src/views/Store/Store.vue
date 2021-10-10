<template>
    <div class="store">
        <Head></Head>
        <Search></Search>
        <Nav></Nav>
        <div class="hr w1200"></div>
        <MenuList></MenuList>
        <div class=" store w1200">
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
        <div class="w1200">
        <el-pagination background layout="prev, pager, next" :total="1000"> </el-pagination>
        </div>

        <Foot></Foot>
    </div>
</template>
<script>
import Head from "../../components/Head";
import Foot from "../../components/Foot";
import Search from "../Home/Search";
import MenuList from "../Product/MenuList";
import Nav from '@/views/Home/Nav'
export default {
    name: "Store",
    components: {
      Nav,
        Head,
        Search,
        Foot,
        MenuList
    },
};
</script>
<style lang="scss" scoped>
.store {
    margin-bottom: 20px;
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
</style>
