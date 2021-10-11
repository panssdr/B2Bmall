<template>
  <div class="detail-left">
    <div class="img">
      <img
        src="https://private.zkh360.com/PRODUCT/BIG/BIG_AA3633565_01.jpg?x-oss-process=style/common_style&timestamp=1616670044000"
        alt=""
      />
    </div>
    <div class="controller">
      <i class="direction"><</i>
      <div class="gallery">
        <img
          src="https://private.zkh360.com/PRODUCT/BIG/BIG_AA3633565_01.jpg?x-oss-process=style/common_style&timestamp=1616670044000"
          alt=""
        />
      </div>
      <i class="direction">></i>
    </div>
    <div class="footer">
      <div class="social-fav-list">
        <svg class="icon icon-first"  aria-hidden="true">
          <use xlink:href="#icon-aixin1"></use>
        </svg>
        <span>收藏物品</span>
      </div>
      <div class="social-fav-list">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zhengpinbz"></use>
        </svg>
        <span>正品保障</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailLeft",
};
</script>

<style lang="scss" scoped>
.detail-left {
  display: flex;
  flex-direction: column;
  .img {
    margin: 0 auto;
    height: 352px;
    width: 352px;
    border: 1px solid rgba(0, 0, 0, 0.308);
    img {
      height: 350px;
      width: 350px;
      // background-color: red;
    }
  }
  .controller {
    margin-top: 20px;
    width: 350px;
    // display: relative;
    padding-left: 4px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    .gallery {
      width: 280px;
      img {
        height: 68px;
        width: 68px;
        border: 1px solid red;
      }
    }

    .direction {
      //   display: block;
      margin-top: 20px;
      font-size: 30px;
      text-align: center;
      color: #aaa;
      font-weight: 400;
    }
  }
  .footer {
    margin-top: 20px;
    display: flex;
    justify-content:flex-start ;
    align-content: center;
    width: 350px;
    height: 46px;
    font-size: 10px;
    .icon {
      font-size: 20px;
    }
    .social-fav-list {
      display: flex;
      justify-content: space-around;
      align-content: center;
      margin-left: 20px;
     span{
         display: block;
         margin-top: 3px;
         margin-left: 10px;
     }
     .icon-first{
         color:red;
     }
    }
  }
}
</style>
