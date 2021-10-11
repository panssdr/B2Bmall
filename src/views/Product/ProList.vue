<template>
  <div class="prolist w1200">
    <ul>
      <li v-for="(item, i) in product" class="flex-b" :key="i">
        <div class="flex-l">
          <div class="pro-img">
            <img :src="item.logo" alt="" @click="goProductDetail" />
          </div>
          <div class="pro-info">
            <p>{{ item.title }}</p>
            <p class="c-888">
              型号： <span>{{ item.xinghao }}</span>
            </p>
            <p class="c-888">
              品牌： <span>{{ item.brand }}</span>
            </p>
          </div>
        </div>
        <div>￥{{ item.price }}</div>
        <div>
          <p>{{ item.store_info.company }}</p>
          <p class="c-888">
            {{ item.store_info.city }}{{ item.store_info.county
            }}{{ item.store_info.address }}
          </p>
          <p><i class="el-icon-s-shop"></i><span>旺铺</span></p>
        </div>
      </li>
    </ul>
    <div class="pro-page">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="10"
        class="fr"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: "ProList",
  data() {
    return {
      product: []
    };
  },
  mounted() {
    axios
      .get("https://zsl.zmzhi.com/api/goods/getGoodsList?page=0")
      .then(r => {
        if (r.data.code == 0) {
          this.product = r.data.data;
          console.log(this.product);
        } else {
          console.log(r.data.msg);
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    goProductDetail() {
      this.$router.push("/ProductDetail");
    }
  }
};
</script>
<style lang="scss" scoped>
.c-888 {
  color: #888;
}
.prolist {
  ul {
    li {
      padding-top: 15px;
      height: 170px;
      border-bottom: 1px solid #e4e4e4;
      > div {
        &:first-child {
          width: 380px;
          .pro-img {
            padding: 10px;
            width: 140px;
            height: 140px;
            border: 1px solid #eee;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .pro-info {
            padding-left: 10px;
            font-size: 14px;
            p {
              margin-bottom: 10px;
            }
          }
        }
        &:nth-child(2) {
          font-size: 20px;
          font-weight: bold;
          color: #f60;
        }
        &:last-child {
          font-size: 14px;
          width: 220px;
          p {
            padding-bottom: 10px;
            i {
              font-size: 18px;
              padding: 0 5px;
              padding-bottom: 3px;
              color: #fff;
              display: inline-block;
              background-color: #f60;
            }
            span {
              padding: 0 5px;
              color: #f60;
              display: inline-block;
              border: 1px solid #f60;
            }
          }
        }
      }
    }
  }
  .pro-page {
    height: 30px;
    margin: 10px auto;
    .fr {
      float: right;
    }
  }
}
</style>
