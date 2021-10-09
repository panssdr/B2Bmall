<template>
  <footer class="foot">
    <div class="w1200 flex-b">
      <div class="foot-logo">LOGO</div>
      <div class="foot-link">
        <ul class="flex-l">
          <li>
            <a href="#">关于我们</a>
          </li>
          <li>
            <a href="#">友情链接</a>
          </li>
          <li>
            <a href="#">汽车品牌</a>
          </li>
          <li>
            <a href="#">意见反馈</a>
          </li>
          <li>
            <a href="#">规则规范</a>
          </li>
          <li>
            <a href="#">联系我们</a>
          </li>
          <li>
            <a href="#">法律声明</a>
          </li>
          <li>
            <a href="#">服务条款</a>
          </li>
          <li>
            <a href="#">隐私政策</a>
          </li>
        </ul>
        <ul class="flex-l">
          <li>
            <a href="#">经营许可证编号：苏B2-20140114</a>
          </li>
          <li>
            <a href="#">服务热线：0719-8311727 </a>
          </li>
        </ul>
        <ul class="flex-l">
          <li>
            <a href="#">Copy right © 紫色鹭有限公司 版权所有</a>
          </li>
          <li>
            <a href="#">苏ICP备18040980号-1</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Foot",
};
</script>
<style scoped lang="scss">
// scoped只在单独组件生效
.foot {
  padding: 70px 0;
  height: 320px;
  background-color: #222;
  .foot-logo {
    height: 165px;
    width: 165px;
    font-size: 35px;
    color: #222;
    background-color: #333;
    text-align: center;
    line-height: 165px;
    border-radius: 50%;
    font-weight: 600;
  }
  .foot-link {
    ul {
      li {
        margin: 0 22px;
        margin-bottom: 40px;
        cursor: pointer;
      }
    }
    a {
      color: #666;
    }
  }
}
</style>
