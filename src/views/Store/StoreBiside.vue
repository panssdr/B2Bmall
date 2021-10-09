<template>
    <div class="side">
        <div class="store_content_left_info">
            <div class="info_top">
                <p>
                    <span><i></i></span><span>汽配旺铺</span><span><i></i></span>
                </p>
                <div class="s_search_mid">
                    <p>十堰擎邦机械设备有限公司</p>
                    <p><span> 旺铺</span> 第<span class="font-o"> 2 </span>年 <em>认</em><em>厂</em></p>
                </div>
            </div>
            <div class="info_mid">
                <p><span>联系人:</span><em>张先生</em></p>
                <p><span>电话:</span><em>188xxxx6366</em></p>
                <p><span>所在地区:</span><em>浙江杭州</em></p>
            </div>
            <div class="info_bot"><span>收藏店铺</span><span>进入店铺</span></div>
        </div>
        <div class="side-search">
            <p>产品搜索</p>
            <div>
                关键词：
                <el-input placeholder="请输入内容" class="search-input"></el-input>
            </div>
        </div>
        <div class="side-list">
            <p>店铺分类</p>
            <div>
                <ul>
                    <li v-for="item in 9">
                        <i class="el-icon-circle-plus-outline"></i> <span>{{ item }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.side {
    width: 270px;
    // border: 1px solid #ededed;
}
.info_top {
    border: 1px solid #ededed;

    height: 173px;
    > p {
        display: flex;
        justify-content: space-around;
        margin: 25px 0;
        font-size: 30px;
        font-weight: 600;
        color: #2d82ff;
        text-align: center;
        span {
            display: block;
            margin: auto 0;
            &:nth-child(1) i {
                display: block;
                border-right: 43px solid #2d82ff;
                border-left: 0px solid #2d82ff;
                border-top: 1px solid #fff;
                border-bottom: 1px solid #fff;
            }
            &:nth-child(3) i {
                display: block;
                border-left: 43px solid #2d82ff;
                border-right: 0px solid #2d82ff;
                border-top: 1px solid #fff;
                border-bottom: 1px solid #fff;
            }
        }
    }
}
.info_mid {
    padding: 20px;
    height: 147px;
    border: 1px solid #ededed;

    border-top: 1px dashed #ededed;
    border-bottom: 1px dashed #ededed;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    p {
        text-align: center;
        padding: 0 10px;
        span {
            margin-right: 10px;
            color: #000;
            font-weight: bold;
        }
    }
}
.info_bot {
    border-right: 1px solid #ededed;
    border-left: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
    display: flex;
    justify-content: center;
    height: 70px;
    text-align: center;
    span {
        display: block;
        width: 106px;
        height: 34px;
        margin: auto 10px;
        color: #000;
        line-height: 34px;
        text-align: center;
        border: 1px solid #ededed;
        cursor: pointer;
    }
}
.s_search_mid {
    width: 200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    p {
        &:first-of-type {
            color: #000;
            font-weight: 600;
        }
        &:not(:first-of-type) {
            margin: 15px 0;
            font-size: 14px;
        }

        &:nth-child(2) span:first-of-type {
            padding: 0 5px;
            color: #fe6a21;
            border: 1px solid #fe6a21;
            i {
                display: block;
                float: left;
                padding: 0 5px;
                color: #fff;
                background-color: #fe6a21;
            }
            em {
                margin: 5px;
                padding: 0 3px;
                color: #fe6a21;
                border: 1px solid #fe6a21;
            }
        }
    }
}
.side-search {
    padding: 20px;
    margin-top: 20px;
    border: 1px solid #ededed;
    p {
        padding-bottom: 20px;
        &::before {
            content: "";
            display: inline-block;
            position: relative;
            top: 5px;
            left: -5px;
            width: 5px;
            height: 20px;
            background-color: #2d82ff;
        }
    }
    .search-input {
        width: 150px;
        display: inline-block;
    }
}
.side-list {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1px solid #ededed;
    padding: 20px;
    p {
        padding-bottom: 20px;
        &::before {
            content: "";
            display: inline-block;
            position: relative;
            top: 5px;
            left: -5px;
            width: 5px;
            height: 20px;
            background-color: #2d82ff;
        }
    }
    li {
        border-bottom: 1px solid #f5f5f5;
        height: 45px;
        line-height: 45px;
        span {
            margin-left: 20px;
        }
    }
}
</style>
