<template>
    <section class="w1200">
        <div class="nav flex-l">
            <span>全部商品分类</span>
            <ul class="flex-l">
                <li @click="go(1)">首  页</li>
                <li @click="go(2)">需求信息</li>
                <li @click="go(3)">供应信息</li>
                <li @click="go(3)">样品超市</li>
                <!-- 样品超市和资讯中心链接还没写 -->
                <li @click="go(3)">资讯中心</li>
            </ul>
        </div>
    </section>
</template>
<script>
export default {
    name: "Nav",
    methods: {
        go(n) {
            switch (n) {
                case 1:
                    this.$router.push("/");
                    break;
                case 2:
                    this.$router.push("/Product");
                    break;
                case 3:
                    this.$router.push("/Store");
                    break;
            }
        },
    },
};
</script>
<style lang="scss" scoped>
.nav {
    height: 50px;
    color: #fff;
    padding: 0 20px;
    background-color: #2d82ff;
    span {
        line-height: 50px;
        width: 230px;
    }
    li {
        line-height: 50px;
        width: 140px;
        text-align: center;
        &:hover {
            background-color: #4892ff;
            cursor: pointer;
        }
    }
}
</style>
