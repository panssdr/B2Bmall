<template>
    <header class="head">
        <div class="flex-b w1200">
            <div class="head-left">
                <span>您好，<em   class="font-o hand" @click="go(1)">{{username}}</em></span>
                <span><em   class="font-o hand" @click="go(2)">{{isRegis}}</em> </span>
            </div>
            <div class="head-right">
                <span class="hand" @click="go(3)">首页</span>
                <span class="hand" @click="go(4)">购物车</span>
                <span class="hand" @click="go(5)">我的收藏</span>
                <span class="hand" @click="go(6)">会员中心</span>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Head",
    data() {
        return {
            username:'请登陆',
            isLogin:false,
            isRegis:'免费注册'
        }
    },
    mounted() {
        if(this.$store.state.username == ''){
                this.isLogin =false
        }else{
            this.isLogin =true
            this.username = this.$store.state.username
            this.isRegis = '欢迎回来'
        }
    },
    methods: {
        go(n) {
            switch (n) {
                case 1:
                    if(this.$store.state.username == ''){
                        this.$router.push("/Login");
                    }else{
                        this.$router.push("/Mine");
                    }
                    break;
                case 2:
                    this.$router.push("/Regis");
                    break;
                case 3:
                    this.$router.push("/");
                    break;
                case 4:
                    this.$router.push("/ShoppingCar");
                    break;
                case 5:
                    this.$router.push("/MyCollect");
                    break;
                case 6:
                    this.$router.push("/Mine");
                    break;
            }
        },
    },
};
</script>
<style scoped lang="scss">
// scoped只在单独组件生效
.hand{
    cursor: pointer;
}
.head {
    height: 40px;
    background-color: #f3f6f2;
    line-height: 40px;
    font-size: 12px;
    color: #666;
    .head-left {
        span {
            margin-left: 10px;
        }
    }
    .head-right {
        span {
            margin-left: 15px;
        }
    }
}
</style>
