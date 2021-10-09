<template>
  <section class="search w1200">
    <div class="search-logo">
      <a href="#">
        <img src="../../assets/img/index_search_logo.png" alt="" />
      </a>
    </div>
    <div class="search-mid">
      <ul class="flex-l">
        <li><a href="#" class="color-o">产品</a></li>
        <li><a href="#">公司</a></li>
        <li><a href="#">配件目录</a></li>
        <li><a href="#">EPC查询</a></li>
      </ul>
      <div class="flex-b">
        <div class="search-mid-in flex-b">
            <input type="text">
          <div class="search-mid-in-btn">搜索</div>
        </div>
        <div class="search-mid-out">发布询单价</div>
      </div>
    </div>
    <div class="search-code">
      <img src="../../assets/img/index_search_code.png" alt="" />
      <p>纺织城公众号</p>
    </div>
  </section>
</template>
<script>
export default {
  name: "Search",
};
</script>
<style lang="scss" scoped>
/* 这里是 首页样式的搜索部分的内容哦 */

.search {
  display: flex;
  .search-mid {
    width: 660px;
    margin: 0 41px;
    margin-top: 30px;
     li {
      margin: 5px 0;
      font-size: 12px;
      margin-right: 15px;
    }
    .search-mid-in {
      border: 2px solid #2d82ff;
      width: 530px;
      height: 50px;
      input{
          padding: 15px;
          width: 400px;
      }
    }
    .search-mid-in-btn {
      width: 120px;
      line-height: 46px;
      text-align: center;
      color: #fff;
      background-color: #2d82ff;
      font-size: 14px;
      cursor: pointer;
    }

    .search-mid-out {
      color: #2d82ff;
      margin-left: 10px;
      border: 2px solid #2d82ff;
      width: 120px;
      height: 50px;
      line-height: 46px;
      text-align: center;
      font-size: 14px;
      cursor: pointer;
    }
  }

  .search-code {
    margin-top: 30px;
    font-size: 14px;
    text-align: center;
    p {
      width: 100px;
    }
  }
}
</style>
