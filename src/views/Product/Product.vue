<template>
    <div class="product">
        <Head></Head>
        <Search></Search>

           <Nav></Nav>

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
import Nav from "@/views/Home/Nav.vue"
export default {
    name: "Product",
    components:{
        Head,
        Foot,
        Search,
        MenuList,
        ProList,
        Nav
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
