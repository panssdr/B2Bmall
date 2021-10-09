<template>
    <div class="w890">
        <div class="title">
            <p>
                <span>详细信息</span>
            </p>
        </div>
        <div class="info">
            <p><span>店铺名称</span><span>无锡诺普特汽车零部件有限公司</span></p>
            <p><span>经营模式</span><span>工贸结合</span></p>
            <p><span>所在地区</span><span>江苏无锡锡沪路555号</span></p>
            <p><span>主营产品</span><span>油嘴 柱塞 喷油器</span></p>
            <p><span>联系方式</span><span>18852474040</span></p>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.info p {
    height: 50px;
    margin: 20px 0;
    border: 1px solid #ddd;
    span {
        font-size: 14px;
        line-height: 50px;
        display: inline-block;
        &:first-child {
            text-align: center;
            width: 120px;
            height: 50px;
            background-color: #eeeeee;
        }
        &:last-child {
            padding-left: 10px;
            border-left: 1px solid #ddd;
        }
    }
}
.title {
    p {
        border-bottom: 3px solid #2d82ff;
        span {
            display: inline-block;
            padding: 10px 20px;
            font-size: 14px;
            color: #fff;
            background-color: #2d82ff;
        }
    }
}
 
</style>
