<template>
    <ul>
        <li v-for="(item,i) in product" :key="i">
            <div><img :src="item.logo"></div>
            <p>{{item.title}}</p>
            <p>￥<span>{{item.price}}</span></p>
        </li>
    </ul>
</template>
<script>
import Axios from 'axios';


export default {
    name: "Guess",
      data() {
        return {
             product:[],
        }
    },
    mounted(){
      Axios.get("https://zsl.zmzhi.com/api/goods/getGoodsList",{is_recommend:1}).then((r) => {
                if (r.data.code == 0) {
                    this.product=r.data.data
                    // console.log(product);
                } else {
                    console.log(r.data.msg);
                }
            })
    }
};
</script>
<style lang="scss" scoped>

    ul {
        margin-bottom: 20px;
        display: flex;
        flex-wrap:wrap ;
        justify-content: left;
        li {
            width: 200px;
            text-align: center;
            margin-bottom: 20px;
            div {
                img {
                    height: 180px;
                    width: 180px;
                }
            }
            p {
                margin: 0 auto;
                overflow: hidden;
                text-align-last: left;
                width: 180px;
                &:nth-child(2){
                    height: 45px;
                }
                &:nth-child(3) {
                    color: #f60;
                }
            }
        }
    }

</style>

