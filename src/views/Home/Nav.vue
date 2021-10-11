<template>
  <section class="w1200">
    <div class="nav flex-l">
      <span>全部商品分类</span>
      <ul class="flex-l">
        <li @click="go(1)" :class="{isFocus:this.$route.path=='/Home'}">首 页</li>
        <li @click="go(2)" :class="{isFocus:this.$route.path=='/Demand'}">需求信息</li>
        <li @click="go(3)" :class="{isFocus:this.$route.path=='/Provide'}">供应信息</li>
        <li @click="go(4)" :class="{isFocus:this.$route.path=='/Store'}">样品超市</li>
        <!-- 样品超市和资讯中心链接还没写 -->
        <li @click="go(5)" :class="{isFocus:this.$route.path=='/Product'}">找产品</li>
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

          this.$router.push("/Home");
          break;
        case 2:
          this.$router.push("/Demand");
          break;
        case 3:
          this.$router.push("/Provide");
          break;
        case 4:
          this.$router.push("/Store");
          break;
        case 5:
          this.$router.push("/Product");
          break;
      }
    }
  },
  computed:{

  }
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
    .isFocus{
      background-color:red;
    }
  }
}
 .isFocus{
      background-color:red;
    }
</style>
