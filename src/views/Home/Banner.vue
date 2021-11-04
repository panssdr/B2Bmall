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

          <el-form

            :model="numberValidateForm"
            ref="numberValidateForm"
            label-width="20px"
            class="demo-ruleForm"
          >
            <el-form-item prop="phone">
              <el-input
               placeholder="请输入手机号"
                v-model.number="numberValidateForm.age"
                autocomplete="off"
              ></el-input>
            </el-form-item>
              <el-form-item  prop="desc">
              <el-input size="medium" cols="15" rows="4" placeholder="请输入你的需求,包括名称,支数,工艺,稍后客服会与你取得联系" type="textarea" v-model="ruleForm"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                style="weigth:200px"
                @click="submitForm('numberValidateForm')"
                >我要买货</el-button
              >

            </el-form-item>

          </el-form>
        </div>

      <!-- <div class="user-more">查看更多 <i class="el-icon-arrow-right"></i></div> -->
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
      numberValidateForm: {
        age: ""
      },
      ruleForm:"",
      menuList: [
        {
          id: 1,
          name: "时装面料",
          data: [
            {
              name: "主要成分",
              data: [
                { name: "全棉" },
                { name: "麻" },
                { name: "真丝" },
                { name: "羊毛" },
                { name: "化纤" },
                { name: "混纺" }
              ]
            },
            {
              name: "产品名称",
              data: [
                { name: "全棉纱卡" },
                { name: "涤棉纱卡" },
                { name: "精工呢" },
                { name: "厨师格" },
                { name: "华达呢" },
                { name: "卡其" }
              ]
            },
            {
              name: "生产设备",
              data: [
                { name: "喷水织机" },
                { name: "喷气织机" },
                { name: "箭杆织机" },
                { name: "有梭织机" },
                { name: "双面圆机" },
                { name: "单面圆机" },
                { name: "经编织机" },
                { name: "提花织机" }
              ]
            },
            {
              name: "精细加工",
              data: [{ name: "防皱处理" }, { name: "防水处理" }]
            }
          ]
        },
        {
          id: 2,
          name: "工装面料",
          data: [
            {
              name: "主要成分",
              data: [{ name: "毛涤" }, { name: "纺毛" }, { name: "纯毛" }]
            },
            {
              name: "产品名称",
              data: [
                { name: "斜纹TR哔叽西装" },
                { name: "涤粘休闲裤装工作服" },
                { name: "水手服" },
                { name: "JK制服衬衫" },
                { name: " 时装面料" }
              ]
            },
            {
              name: "生产设备",
              data: [{ name: "600绷缝机" }, { name: "500绷缝机" }]
            },
            { name: "精细加工", data: [{ name: "防皱处理" }] }
          ]
        },
        {
          id: 3,
          name: "家纺布料",
          data: [
            {
              name: "主要成分",
              data: [
                { name: "棉" },
                { name: "羊毛" },
                { name: "兔毛" },
                { name: "石棉" },
                { name: "粘胶纤维" }
              ]
            },
            {
              name: "产品名称",
              data: [
                { name: "纯棉" },
                { name: "涤棉混纺" },
                { name: "真丝" },
                { name: "色织棉" }
              ]
            },
            {
              name: "生产设备",
              data: [
                { name: "喷水织机" },
                { name: "喷气织机" },
                { name: "箭杆织机" },
                { name: "有梭织机" },
                { name: "双面圆机" },
                { name: "单面圆机" },
                { name: "经编织机" },
                { name: "提花织机" }
              ]
            },
            {
              name: "精细加工",
              data: [{ name: "防皱处理" }, { name: "防水处理" }]
            }
          ]
        },
        {
          id: 4,
          name: "工业用布",
          data: [
            {
              name: "主要成分",
              data: [
                { name: "长丝聚酯纤维" },
                { name: "涤纶" },
                { name: "丙纶" },
                { name: "聚丙烯" }
              ]
            },
            {
              name: "产品名称",
              data: [
                { name: "复丝滤布" },
                { name: "气固分离类除尘滤料" },
                { name: "透气层布" },
                { name: "捕集袋" }
              ]
            },
            {
              name: "生产设备",
              data: [
                { name: "丰田织机" },
                { name: "津田驹织机" },
                { name: "喷水织机" }
              ]
            },
            {
              name: "精细加工",
              data: [{ name: "防皱处理" }, { name: "防水处理" }]
            }
          ]
        },
        {
          id: 5,
          name: "功能性用布",
          data: [
            {
              name: "主要成分",
              data: [
                { name: "涤棉" },
                { name: "全棉" },
                { name: "真丝" },
                { name: "羊毛" },
                { name: "化纤" },
                { name: "混纺" }
              ]
            },
            {
              name: "产品名称",
              data: [
                { name: "全棉纱卡" },
                { name: "涤棉纱卡" },
                { name: "精工呢" },
                { name: "厨师格" },
                { name: "华达呢" },
                { name: "卡其" }
              ]
            },
            {
              name: "生产设备",
              data: [
                { name: "喷水织机" },
                { name: "喷气织机" },
                { name: "箭杆织机" },
                { name: "有梭织机" },
                { name: "双面圆机" },
                { name: "单面圆机" },
                { name: "经编织机" },
                { name: "提花织机" }
              ]
            },
            {
              name: "精细加工",
              data: [
                { name: "阻燃处理" },
                { name: "防静电处理" },
                { name: "防火" },
                { name: "耐高温处理" }
              ]
            }
          ]
        },
        {
          id: 6,
          name: "胚布市场",
          data: [
            {
              name: "主要成分",
              data: [
                { name: "涤棉" },
                { name: "真丝" },
                { name: "羊毛" },
                { name: "混纺" }
              ]
            },
            {
              name: "产品名称",
              data: [
                { name: "涤棉坯布" },
                { name: "网格布胚布" },
                { name: "中碱网格布" },
                { name: "大眼网格布" }
              ]
            },
            {
              name: "生产设备",
              data: [
                { name: "喷水织机" },
                { name: "喷气织机" },
                { name: "箭杆织机" },
                { name: "有梭织机" },
                { name: "双面圆机" },
                { name: "单面圆机" },
                { name: "经编织机" },
                { name: "提花织机" }
              ]
            },
            {
              name: "精细加工",
              data: [
                { name: "耐高温处理" },
                { name: "防皱处理" },
                { name: "防水处理" }
              ]
            }
          ]
        },
        {
          id: 7,
          name: "辅料市场",
          data: [
            {
              name: "主要成分",
              data: [
                { name: "黄麻纱线" },
                { name: "涤纶" },
                { name: "真丝" },
                { name: "丙纶" },
                { name: "化纤" },
                { name: "混纺" }
              ]
            },
            {
              name: "产品名称",
              data: [
                { name: "优质黄麻绳 " },
                { name: "细绳子" },
                { name: "间色织带" },
                { name: "涤纶仿尼龙织带" },
                { name: "杂纹织带" }
              ]
            },
            {
              name: "生产设备",
              data: [
                { name: "喷水织机" },
                { name: "单面圆机" },
                { name: "经编织机" },
                { name: "喷气织机" },
                { name: "提花织机" }
              ]
            },
            {
              name: "精细加工",
              data: [{ name: "防皱处理" }, { name: "防水处理" }]
            }
          ]
        },
        {
          id: 8,
          name: "原料市场",
          data: [
            {
              name: "主要成分",
              data: [
                { name: "真丝" },
                { name: "羊毛" },
                { name: "化纤" },
                { name: "混纺" }
              ]
            },
            {
              name: "产品名称",
              data: [
                { name: "全棉纱卡" },
                { name: "涤棉纱卡" },
                { name: "精工呢" },
                { name: "厨师格" },
                { name: "华达呢" },
                { name: "卡其" }
              ]
            },
            {
              name: "生产设备",
              data: [
                { name: "喷气织机" },
                { name: "箭杆织机" },
                { name: "有梭织机" },
                { name: "提花织机" },
                { name: "双面圆机" },
                { name: "单面圆机" }
              ]
            },
            { name: "精细加工", data: [{ name: "防皱处理" }] }
          ]
        }
      ],
      menuList1: [],
      bannerList: [
        {
          id: 1,
          cate_id: 1,
          title: "第一张",
          s_title: "第一张",
          summary: "第一张第一张",
          img:
            "http://5b0988e595225.cdn.sohucs.com/images/20180128/6a11c827f3664846ab6516578778eb79.jpeg",
          url: "0",
          content: "",
          sort: 0,
          status: 1,
          create_time: "2020-04-17 16:17:54",
          update_time: "2020-12-01 23:37:04",
          delete_time: 0,
          cate_name: "首页顶部轮播图"
        },
        {
          id: 2,
          cate_id: 1,
          title: "第二张",
          s_title: "第二张",
          summary: "第二张",
          img:
            "http://www.sdhuaye.com/imageRepository/105f4a6d-1f79-47db-bdb4-4cc6798991ea.jpg",
          url: "0",
          content: "",
          sort: 0,
          status: 1,
          create_time: "2020-04-25 14:48:49",
          update_time: "2020-12-01 23:31:45",
          delete_time: 0,
          cate_name: "首页顶部轮播图"
        },
        {
          id: 3,
          cate_id: 1,
          title: "博世",
          s_title: "2",
          summary: "22",
          img:
            "http://img105.job1001.com/upload/adminnew/2014-09-26/1411722319-DWC2HEZ.jpg",
          url: "0",
          content: null,
          sort: 0,
          status: 1,
          create_time: "2020-04-25 19:20:01",
          update_time: "2020-12-01 23:31:28",
          delete_time: 0,
          cate_name: "首页顶部轮播图"
        }
      ]
    };
  },
  // mounted() {
  //   Axios.get("https://zsl.zmzhi.com/api/goods/getCategoryTree").then(r => {
  //     if (r.data.code == 0) {
  //       this.menuList = r.data.data;
  //     } else {
  //       console.log(r.data.msg);
  //     }
  //   });
  // },
  methods: {
    showMenuList(n) {
      this.show = true;
      this.menuList1 = this.menuList[n];
    },
    userNews(n) {
      this.act = n;
    },
    go(n) {
      switch (n) {
        case 1:
          this.$router.push("/Logins");
          break;
        case 2:
          this.$router.push("/Regis");
          break;
      }
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
        a:hover {
          color: rgb(241, 63, 122);
        }
        font-size: 15px;
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
        height: 50px;
        line-height: 50px;
        border-left: 4px solid #fff;
        cursor: pointer;

        &:hover {
          border-left: 4px solid #2d82ff;
          color: red;
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
      padding-top: 10px;
      padding-right: 20px;

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
