<template>
    <ul>
        <li v-for="(item,i) in product" :key="i">
            <div><img :src="item.logo"></div>
            <a><p>{{item.title}}</p></a>
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
             product:[{id:1,title:'全弹牛津布料',logo:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3067726825,2787620451&fm=199&app=68&f=JPEG?w=750&h=750',price:35.00},
             {id:2,title:'手术服面料-利梦纺织品',logo:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2844252551,3649067827&fm=199&app=68&f=JPEG?w=750&h=750&s=FF84C908819AEBCC3A8B7DDC0300C0B0',price:17.00},
             {id:3,title:'32*32防静电面料 涤棉纱卡工作服面料',logo:"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4040641499,1638596737&fm=199&app=68&f=JPEG?w=750&h=750&s=00948F7DCD83EF7C5E9A558303003088",price:14.90},
             {id:4,title:'牛奶丝四面弹面料',logo:"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1590473645,751986456&fm=199&app=68&f=JPEG?w=750&h=750&s=7B2827C348125AC6F6890C770300105A",price:31.50},
             {id:5,title:'防水防油防污三防面料',logo:"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4281297836,3761334596&fm=199&app=68&f=JPEG?w=750&h=750&s=31B2789498D3E5C698115D980300C088",price:21.00},
             {id:6,title:'功能性全涤面料 防静电布料',logo:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1342833317,4285186773&fm=199&app=68&f=JPEG?w=750&h=750&s=D219AA6641D64E6F5A07D66B0300E07E",price:18.00},
             {id:7,title:'水油不浸面料',logo:"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3913780492,1937595739&fm=199&app=68&f=JPEG?w=750&h=750&s=7132507ECA62521F542281B403009009",price:15.00},
             {id:8,title:'广东专业批发纯涤',logo:"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=470357484,3509483535&fm=199&app=68&f=JPEG?w=750&h=750&s=FF8B7A2347E3EB45509567C60300A026",price:20.00},],
        }
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
            margin-bottom: 10px;
            a:hover{
              color: #f60;
            }
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
                    height: 30px;
                }
                &:nth-child(3) {
                    color: #f60;
                }
            }
        }
    }

</style>

