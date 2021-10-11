<template>
    <div class="product">
        <Head></Head>
        <Search></Search>
        <div class="hr w1200"></div>
        <MenuList></MenuList>
        <ProList></ProList>
        <Foot></Foot>
    </div>
</template>
<script>
import Head from "@/components/Head.vue";
import Foot from "@/components/Foot.vue";
import Search from "@/views/Home/Search.vue";
import MenuList from "../Product/MenuList.vue";
import ProList from "../Product/ProList.vue";
export default {
    name: "Product",
    components:{
        Head,
        Foot,
        Search,
        MenuList,
        ProList,
    },
    data() {
        return {
            show: true,
        };
    },
};
</script>
<style lang="scss" scoped>

</style>
