<template>
    <div class="home">
        <Head></Head>
        <Search></Search>
        <div class="bg-f5">
            <Nav></Nav>
            <Banner></Banner>
            <AdImg></AdImg>
        </div>
        <ForYou></ForYou>
        <section class="guess w1200">
            <p>猜你喜欢</p>
            <Guess></Guess>
        </section>
        <Foot></Foot>
    </div>
</template>

<script>
// import { getApi } from "../../assets/js/getApi.js";
import Head from "@/components/Head.vue";
import Foot from "@/components/Foot.vue";
import Search from "@/views/Home/Search.vue";
import Nav from "@/views/Home/Nav.vue";
import Banner from "@/views/Home/Banner.vue";
import AdImg from "@/views/Home/AdImg.vue";
import Guess from "@/views/Home/Guess.vue";
import ForYou from "@/views/Home/ForYou.vue";
export default {
    name: "Home",
    components: {
        Head,
        Foot,
        Search,
        Nav,
        Banner,
        AdImg,
        Guess,
        ForYou,
    },
    mounted() {

    },
    methods: {},
};
</script>
<style lang="scss" scoped>
.guess {
    > p {
        padding: 30px;
        color: #2c3e50;
        text-align: center;
        font-weight: bold;
        font-size: 26px;
    }
}
</style>
