<template>
    <div class="minefun">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="所有订单" name="first">
                <div class="order">
                    <p class="order-title flex-l">
                        <span>宝贝</span><span>单价</span><span>数量</span><span>实付款</span
                        ><span
                            ><el-dropdown trigger="click">
                                <span class="el-dropdown-link">
                                    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>已完成</el-dropdown-item>
                                    <el-dropdown-item>未完成</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown> </span
                        ><span>交易操作</span>
                    </p>
                    <el-pagination background layout="prev, pager, next" :total="100"> </el-pagination>
                </div>
                <ul class="oder-list">
                    <li v-for="item in 4">
                        <p><span>订单号：8787878585897687</span><span>xxxx旗舰店</span></p>
                        <div>
                            <div class="flex-l">
                                <div>
                                    <img src="" />
                                </div>
                                <div class="order-info">
                                    <p>博世阀组件 F00RJ01692,727,005</p>
                                    <p class="c-888">型号： <span>F00RJ01692</span></p>
                                    <p class="c-888">品牌： <span>博世</span></p>
                                </div>
                            </div>
                            <div>￥22</div>
                            <div>3</div>
                            <div>￥66</div>
                            <div>已完成</div>
                            <div>删除</div>
                        </div>
                    </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="待付款" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="待发货" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="待收货" name="fourth">定时任务补偿</el-tab-pane>
            <el-tab-pane label="待评价" name="fifth">adads </el-tab-pane>
            <el-tab-pane label="待退款" name="sixth">asdad</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    name: "MineFun",
    data() {
        return {
            activeName: "first",
        };
    },
};
</script>
<style lang="scss" scoped>
.oder-list {
    li {
        margin-top: 10px;
        border: 1px solid #daf3ff;
        > p {
            padding-left: 50px;
            height: 30px;
            margin-bottom: 10px;
            line-height: 30px;
            font-size: 14px;
            background-color: #eaf8ff;
            span {
                display: inline-block;
                width: 400px;
                margin-right: 50px;
            }
        }
        > div {
            height: 100px;
            display: flex;
            > div {
                text-align: center;
                &:first-child {
                    padding-left: 10px;
                    width: 400px;
                    img {
                        width: 80px;
                        height: 80px;
                    }

                    .order-info {
                        padding-left: 10px;
                        font-size: 14px;
                        > p {
                            text-align: left;
                            padding-top: 5px;
                        }
                    }
                }
                &:nth-child(n + 2):nth-child(-n + 6) {
                    width: 112px;
                    padding-top: 30px;
                }
            }
        }
    }
}
.order {
    .order-title {
        font-size: 14px;
        height: 40px;
        margin-bottom: 10px;
        line-height: 40px;
        border: 1px solid #e8e8e8;
        background-color: #f5f5f5;
        >span {
            display: inline-block;
            text-align: center;
            &:first-child {
                width: 400px;
            }
            &:nth-child(n + 2):nth-child(-n + 6) {
                width: 112px;
            }
        }
    }
}
</style>
