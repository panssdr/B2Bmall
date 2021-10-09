<template>
    <div class="w890">
        <div class="recommend">
            <p class="flex-b">
                <span>精品推荐</span>
                <span>最新推荐 >></span>
            </p>
            <ul class="flex-b">
                <li v-for="item in 8">
                    <p><img src="" alt="" /></p>
                    <p>博世阀组件，F00RJ01692,727,005</p>
                    <p>￥55.00</p>
                </li>
            </ul>
        </div>
        <div class="recommend">
            <p class="flex-b">
                <span>精品发布</span>
                <span>最新发布 >></span>
            </p>
            <ul class="flex-b">
                <li v-for="item in 8">
                    <p><img src="" alt="" /></p>
                    <p>博世阀组件，F00RJ01692,727,005</p>
                    <p>￥55.00</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.w890 {
    width: 890px;
}
.recommend {
    > p {
        border-bottom: 3px solid #2d82ff;
        span {
            display: inline-block;
            padding: 10px 20px;
            font-size: 14px;
            &:first-child {
                color: #fff;
                background-color: #2d82ff;
            }
            &:last-child {
                padding-right: 0;
                color: #2d82ff;
                background-color: #fff;
            }
        }
    }
    > ul {
        padding-top: 20px;
        flex-wrap: wrap;
        li {
            width: 200px;
            p {
                img {
                    width: 100%;
                    height: 180px;
                    margin-bottom: 10px;
                }
                &:nth-child(2) {
                    font-size: 14px;
                    &:hover {
                        color: #f60;
                    }
                }
                &:last-child {
                    padding: 10px 0;
                    margin-bottom: 20px;
                }
            }
        }
    }
}
</style>
