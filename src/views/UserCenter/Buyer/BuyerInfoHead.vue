<template>
    <header class="head">
        <div style="width:30%;float: right">
            <div class="head-right">
                <span class="hand" @click="go(3)">基本信息维护</span>
                <span class="hand" @click="go(4)">认证资料</span>
                <span class="hand" @click="go(5)">收货地址</span>
                <span class="hand" @click="go(6)">修改密码</span>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "BuyerInfoHead",
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
                case 3:
                    this.$router.push("/UserCenter/BuyerInfo");
                    break;
                case 4:
                    this.$router.push("/UserCenter/AD");
                    break;
                case 5:
                    this.$router.push("/UserCenter/Address");
                    break;
                case 6:
                    this.$router.push("/UserCenter/ChangePwd");
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
    height: 60px;
    line-height: 40px;
    font-size: 15px;
    color: blue;
    .head-right {
        span {
            margin-left: 15px;
        }
    }
}
</style>
