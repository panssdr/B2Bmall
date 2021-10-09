<template>
  <div class="ban w1200 flex-b">
    <div class="list" @mouseleave="show = false">
      <ul>
        <li
          @mouseenter="showMenuList(i)"
          v-for="(item, i) in menuList"
          :key="item.name"
        >
          {{ item.name }}
        </li>
      </ul>
      <!-- 首页左边的导航联动 -->
      <section class="list-more animate__animated animate__fadeIn" v-if="show">
        <ul>
          <li v-for="(item, i) in menuList1.data" :key="item.name">
            <p>{{ item.name }}</p>
            <p>
              <span v-for="(item, j) in menuList1.data[i].data" :key="item.name"
                ><a>{{ item.name }}</a></span
              >
            </p>
          </li>
        </ul>
      </section>
    </div>
    <div class="banner">
      <el-carousel height="400px">
        <el-carousel-item v-for="item in bannerList" :key="item.name">
          <img :src="item.img" class="bannerImg" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="user">
      <div class="user-login">
        <p><i class="el-icon-user-solid"></i></p>
        <p>Hi 你好</p>
        <div>
          <button class="bg-o" @click="go(1)">登陆</button>
          <span></span>
          <button class="bg-o" @click="go(2)">注册</button>
        </div>
      </div>
      <div class="user-news">
        <div>
          <span :class="act == 1 ? 'act' : ''" @click="userNews(1)"
            >资讯头条</span
          >
          <span :class="act == 2 ? 'act' : ''" @click="userNews(2)"
            >论坛精选</span
          >
        </div>
        <ul>
          <li>▫ 东风变速箱最新报道东是...</li>
          <li>▫ 东风变速箱最新报道东...</li>
          <li>▫ 东风变速箱最新报道</li>
          <li>▫ 东风变速箱最新报道东...</li>
        </ul>
      </div>
      <div class="user-more">查看更多 <i class="el-icon-arrow-right"></i></div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";

export default {
  name: "banner",
  data() {
    return {
      show: false,
      act: 1,
      menuList: [],
      menuList1: [],
      bannerList: []
    };
  },
  mounted() {
    Axios.get("https://zsl.zmzhi.com/api/goods/getCategoryTree").then(r => {
      if (r.data.code == 0) {
        this.menuList = r.data.data;
      } else {
        console.log(r.data.msg);
      }
    });
    Axios.get("https://zsl.zmzhi.com/api/carousel/getCarouselList?cate_id=1").then(r => {
      if (r.data.code == 0) {
        this.bannerList = r.data.data;
        console.log(this.bannerList,"123");
      } else {
        console.log(r.data.msg);
      }
    });
  },
  methods: {
    showMenuList(n) {
      this.show = true;
      this.menuList1 = this.menuList[n];
    },
    userNews(n) {
      this.act = n;
    }
  }
};
</script>
<style lang="scss" scoped>
.bannerImg {
  height: 100%;
  width: 100%;
}
.ban {
  margin: 20px auto;
  .list {
    position: relative;
    width: 200px;
    .list-more {
      position: absolute;
      left: 200px;
      top: 0;
      width: 800px;
      min-height: 400px;
      z-index: 11;
      background-color: #fff;
      border: 2px solid #2d82ff;
      padding: 20px;
      li {
        font-size: 14px;
        p {
          text-align: left;
          &:first-child {
            color: #2d82ff;
          }
          &:last-child {
            margin-bottom: 15px;
            span {
              margin-right: 30px;
            }
          }
        }
      }
    }
    > ul {
      background-color: #fff;
      li {
        text-align: center;
        height: 40px;
        line-height: 40px;
        border-left: 4px solid #fff;
        cursor: pointer;

        &:hover {
          border-left: 4px solid #2d82ff;
          background-color: rgba(124, 235, 255, 0.274);
        }
      }
    }
  }
  .banner {
    background-color: #fff;
    width: 740px;
  }
  .user {
    width: 200px;
    .user-login {
      background-color: #fff;
      height: 150px;
      border: 1px solid #eee;
      text-align: center;
      p {
        &:first-of-type {
          height: 60px;
          line-height: 60px;
          margin: 10px auto;
        }
        &:nth-child(2) {
          margin: 10px auto;
        }
      }
      button {
        color: #fff;
        padding: 5px 15px;
        border-radius: 5px;
      }
      span {
        display: inline-block;
        width: 20px;
      }
    }
    .user-news {
      background-color: #fff;
      margin-top: 10px;
      div {
        border-left: 1px solid #f4f4f4;
        border-right: 1px solid #f4f4f4;

        span {
          box-sizing: border-box;
          display: inline-block;
          height: 47px;
          font-weight: bold;
          line-height: 45px;
          width: 50%;
          text-align: center;
          border-top: 3px solid #f4f4f4;
          background-color: #f9f9f9;
          cursor: pointer;
        }
        .act {
          border-top: 3px solid #2d82ff;
          background-color: #fff;
        }
      }
      ul {
        height: 149px;
        padding: 10px;
        border-left: 1px solid #eee;
        border-right: 1px solid #eee;
        li {
          margin: 10px auto;
          font-size: 14px;
        }
      }
    }
    .user-more {
      background-color: #fff;
      text-align: center;
      height: 45px;
      line-height: 45px;
      border: 1px solid #eee;
      cursor: pointer;
    }
  }
}
</style>
