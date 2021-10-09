<template>
    <div id="car">
         <div class="selectAll">
            <input type="checkbox" id="selectAll" @change='checkAll' v-model='allChecked'><label for="selectAll">全选</label>
            <span>商品信息</span>
        </div>
        <div v-for='(item,i) in shopList'>
            <div class="store-name">
                <input type="checkbox" @change='sCheck(i) ' v-model='item.sChecked'>
                <span><img src="img/Mall.png" alt=""> 店铺：
                    <a :href="item.href">{{item.storeName}}</a>
                </span>
                <i></i>
            </div>
            <div v-for="(shop,j) in item.postList" class="store-content">
                <ul>
                    <li><input type="checkbox" @change='check(i,j)' v-model='shop.pChecked'></li>
                    <li><img :src="shop.url"></li>
                    <li>
                        <p><a href="shop.href">{{shop.title}}</a></p>
                        <span>
                            <img src="https://assets.alicdn.com/sys/common/icon/trade/xcard.png" alt="支持信用卡支付">
                            <img src="//img.alicdn.com/tps/i4/T1BCidFrNlXXaSQP_X-16-16.png" alt="消费者保障服务，卖家承诺如实描述">
                            <img src="" alt="">
                        </span>
                    </li>
                    <li>
                        <p>{{shop.norms}}</p>
                    </li>
                    <li>
                        <p>￥{{shop.originalPrice}}</p>
                        <p>￥{{shop.price}}</p>
                    </li>
                    <li>
                        <span @click='red(shop)'>-</span>
                        <input type="text" v-model="shop.count">
                        <span @click='add(shop)'>+</span>
                    </li>
                    <li>
                        <p>￥{{shop.allPrice.toFixed(2)}}</p>
                    </li>
                    <li>
                        <p><a href="#">移入收藏夹</a></p>
                        <p><a href="#">删除</a></p>
                        <p class="similar"><a href="#">相似宝贝</a></p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="counts">
            <div class="count-left">
                <ul>e
                    <li> <input type="checkbox" id="selectAll" @change='checkAll' v-model='allChecked'><label for="selectAll">全选</label></li>
                    <li><a href="#">删除收藏夹</a></li>
                    <li><a href="#">移入收藏夹</a></li>
                    <li><a href="#">分享</a></li>
                </ul>
            </div>
            <div class="count-right">
                <ul>
                    <li>已选商品<span>{{allTotal}}</span>件</li>
                    <li>合计（不含运费）：<span>{{totalPrice.toFixed(2)}}</span> </li>
                    <li :class="allTotal==0?' t':'btn-act'">结算</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    naem: "Shopping",
    data() {
        return {
            totalCount: 0,
            totalPrice: 0,
            allTotal: 0,
            allChecked: false,
            shopList: [
                {
                    storeName: "肖三婆旗舰店",
                    sChecked: false,
                    sTotal: 0,
                    href:
                        "https://xiaosanpo.tmall.com/shop/view_shop.htm?spm=a1z0d.6639537.1997196601.1.1b217484pOtJkc&user_number_id=2453625574",
                    postList: [
                        {
                            href:
                                "https://detail.tmall.com/item.htm?spm=a1z0d.6639537.1997196601.4.1b217484pOtJkc&id=525780286121",
                            url:
                                "https://img.alicdn.com/bao/uploaded/i1/2453625574/O1CN01K6dkHD1r2wKZRZQZP_!!2453625574.jpg_80x80.jpg",
                            title: "自贡冷吃兔肖三婆麻辣兔肉丁兔子肉兔头兔腿四川特产网红小吃零食",
                            norms: "口味：无骨树椒冷吃兔120g*2袋【麻辣】",
                            originalPrice: 82.8,
                            allPrice: 49.8,
                            price: 49.8,
                            count: 1,
                            pChecked: false,
                        },
                        {
                            href:
                                "https://detail.tmall.com/item.htm?spm=a1z0d.6639537.1997196601.12.1b217484pOtJkc&id=524096840913",
                            url:
                                "https://img.alicdn.com/bao/uploaded/i4/2453625574/O1CN01SxBFp11r2wKNNbugj_!!2453625574.jpg_80x80.jpg",
                            title: "肖三婆麻辣大兔腿4只 四川特产兔肉零食网红小吃兔头手撕兔冷吃兔",
                            norms: "口味：无骨树椒冷吃兔120g*2袋【麻辣】",
                            originalPrice: 108.0,
                            allPrice: 49.8,
                            price: 49.8,
                            count: 1,
                            pChecked: false,
                        },
                    ],
                },
                {
                    storeName: "谭八爷旗舰店",
                    sChecked: false,
                    sTotal: 0,
                    href:
                        "https://tanbaye.tmall.com/shop/view_shop.htm?spm=a1z0d.6639537.1997196601.19.1b217484pOtJkc&user_number_id=2200694236672",
                    postList: [
                        {
                            href:
                                "https://detail.tmall.com/item.htm?spm=a1z0d.6639537.1997196601.22.1b217484pOtJkc&id=588688081880",
                            url:
                                "https://img.alicdn.com/bao/uploaded/i4/2200694236672/O1CN01ALfFzS1z9pDA4ViQ3_!!0-item_pic.jpg_80x80.jpg",
                            title: "谭八爷自贡冷吃兔肉四川特产麻辣兔腿香辣兔头手撕兔网红零食小吃",
                            norms: "口味：无骨树椒冷吃兔120g*2袋【麻辣】",
                            originalPrice: 108.0,
                            allPrice: 89.8,
                            price: 89.8,
                            count: 1,
                            pChecked: false,
                        },
                    ],
                },
                {
                    storeName: "冷小兔旗舰店",
                    sChecked: false,
                    sTotal: 0,
                    href:
                        "https://tuxiaoleng.tmall.com/shop/view_shop.htm?spm=a1z0d.6639537.1997196601.30.1b217484pOtJkc&user_number_id=4089800825",
                    postList: [
                        {
                            href:
                                "https://detail.tmall.com/item.htm?spm=a1z0d.6639537.1997196601.33.1b217484pOtJkc&id=613180205893",
                            url:
                                "https://img.alicdn.com/bao/uploaded/i3/4089800825/O1CN01WeF7oa1HxtPj4x618_!!0-item_pic.jpg_80x80.jpg",
                            title: "酸辣无骨鸡爪即食罐装网红去骨柠檬泡椒凤爪脱骨熟食卤味小吃零食",
                            norms: "口味：无骨树椒冷吃兔120g*2袋【麻辣】",
                            originalPrice: 99.0,
                            allPrice: 0,
                            price: 59.4,
                            count: 1,
                            pChecked: false,
                        },
                    ],
                },
            ],
        };
    },

    methods: {
        // 购物车全选
        checkAll() {
            if (this.allChecked) {
                this.shopList.forEach((e, i) => {
                    e.sChecked = true;
                    this.isShop(i);
                });
            } else {
                this.shopList.forEach((e, i) => {
                    e.sChecked = false;
                    this.isShop(i);
                });
            }
            this.changePrice();
        },
        isShop(i) {
            if (this.shopList[i].sChecked) {
                this.shopList[i].postList.forEach((element, k) => {
                    element.pChecked = true;
                });
            } else {
                this.shopList[i].postList.forEach((element, k) => {
                    element.pChecked = false;
                });
            }
        },
        // 店铺全选按钮
        sCheck(i) {
            if (this.shopList[i].sChecked) {
                this.shopList[i].postList.forEach((element, k) => {
                    element.pChecked = true;
                });
            } else {
                this.shopList[i].postList.forEach((element, k) => {
                    element.pChecked = false;
                });
            }
            this.shopList.every((element, k) => {
                return element.sChecked;
            })
                ? (this.allChecked = true)
                : (this.allChecked = false);
            this.changePrice();
        },
        check(i, j) {
            if (this.shopList[i].postList[j].pChecked == true) {
                let v = this.shopList[i].postList.every((item) => {
                    return item.pChecked;
                });
                // 初次
                if (v) {
                    this.shopList[i].sChecked = true;
                    this.sCheck(i);
                } else {
                    this.shopList[i].sChecked = false;
                }
            } else {
                this.shopList[i].sChecked = false;
                this.shopList.every((element, k) => {
                    return element.sChecked;
                })
                    ? (this.allChecked = true)
                    : (this.allChecked = false);
            }
            this.changePrice();
        },
        // 增加俺就
        add(shop) {
            shop.count++;
            this.countChange(shop);
            this.changePrice();
        },
        // 减少按钮
        red(shop) {
            shop.count--;
            this.countChange(shop);
        },
        countChange(shop) {
            if (shop.count < 1) {
                shop.count = 1;
            }
            shop.allPrice = shop.count * shop.price;
            this.changePrice();
        }, // // 监听总价
        changePrice() {
            let p = 0;
            let c = 0;
            this.shopList.forEach((ele) => {
                ele.postList.forEach((e) => {
                    if (e.pChecked) {
                        p += e.allPrice;
                        c += e.count;
                    }
                });
            });
            this.allTotal = c;

            p > 300 ? (p -= 40) : null;
            c >= 2 ? (p *= 0.78) : null;
            this.totalPrice = p;
        },
    },
    mounted() {
        this.shopList.forEach((ele) => {
            ele.postList.forEach((e) => {
                e.allPrice = e.count * e.price;
            });
        });

        this.changePrice();
    },
};
</script>
<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    font-size: 14px;
    color: #3c3c3c;
}

a {
    color: #000;
    text-decoration: none
}

a:hover {
    color: #ff4400;
    text-decoration: underline
}

li {
    list-style: none;
}

input {
    outline: none;
}

#app {
    width: 1200px;
    margin: 0 auto;
}

.selectAll {
    margin: 20px 0;
}

input[type="checkbox"] {
    margin-right: 10px;
    border: 1px solid #c5c5c5;
}

[src="img/Mall.png"] {
    height: 15px;
}

.store-name {
    margin: 10px 0;
}

.store-name i {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-left: 10px;
    background: url("../../assets/img/icon.gif") -80px 0 no-repeat;
}

.store-content {
    box-sizing: border-box;
    padding: 0 20px;
    padding-bottom: 10px;
    border: 1px solid #cccccc;
    background-color: #fcfcfc;
}

.store-content ul {
    display: flex;
    justify-content: space-between;
}

.store-content ul:hover .similar {
    display: block;
}

.store-content ul li {
    padding-top: 20px;
    padding-bottom: 10px;
}

.store-content ul li:nth-child(3) {
    width: 220px;
}

.store-content ul li:nth-child(4) {
    width: 200px;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #fcfcfc;
    opacity: .7;
}

.store-content ul li:nth-child(4):hover {
    border: 1px dashed #cad1d8;
}

.store-content ul li:nth-child(5) p:first-child {
    width: 80px;
    text-align: center;
    color: #a8a8a8;
    text-decoration: line-through;
    font-size: 12px;
}

.store-content ul li:nth-child(5) p:last-child {
    font-weight: bold;
      width: 80px;
    text-align: center;
}

.store-content ul li:nth-child(6) {
    display: flex;
}

.store-content ul li:nth-child(6) span {
    display: block;
    width: 18px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    border: 1px solid #e5e5e5;
    background-color: #f0f0f0;
    cursor: pointer;
}

.store-content ul li:nth-child(6) input {
    width: 40px;
    height: 25px;
    border: 1px solid #aaaaaa;
    text-align: center;
}

.store-content ul li:nth-child(7) p {
    font-weight: bold;
    color: #ff4400;
    width: 100px;
    text-align: center;
}

.similar {
    display: none;
}

.counts {
    height: 50px;
    margin-top: 20px;
    background-color: #e5e5e5;
}

.counts {
    display: flex;
    justify-content: space-between;
}

.counts ul {
    display: flex;
    justify-content: space-between;
    line-height: 50px;
}

.count-left li {
    padding: 0 15px;
}

.count-right li:nth-child(1),
.count-right li:nth-child(2) {
    padding-left: 25px;
}

.count-right li span {
    font-weight: bold;
    color: #ff4400;
    margin: 0 5px;
    font-size: 18px;
}

.count-right li:nth-child(3) {
    width: 120px;
    margin-left: 5px;
    color: #fff;
    font-size: 20px;
    text-align: center;
    background-color: #b0b0b0;
    letter-spacing: 5px;
}

.btn-act {
    background-color: #ff4400 !important;
}</style>
