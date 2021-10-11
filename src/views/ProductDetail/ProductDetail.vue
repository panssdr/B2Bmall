<template>
    <div class="produc-detail">
         <Head></Head>
         <Search></Search>
         <product-detail-list></product-detail-list>
         <Foot></Foot>
    </div>
</template>

<script>
import Head from "@/components/Head.vue";
import Search from "@/views/Home/Search.vue";
import Foot from '../../components/Foot.vue';
import ProductDetailList from './ProductDetailList.vue';
    export default {
        name:"ProductDetail",
        components:{
            Head,
            Foot,
            Search,
            ProductDetailList
        }
        
    }
</script>

<style lang="scss" scoped>

</style>