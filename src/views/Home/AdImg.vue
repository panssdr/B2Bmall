<template>
    <div class="ad flex-b w1200 ">
        <img :src="item.img" alt="item.title" v-for="(item,i) in imgList" :key="i"/>
    </div>
</template>
<script>


export default {
    name: "AdImg",
    data() {
        return {
            imgList:[]
        }
    },

};
</script>
<style lang="scss" scoped>
.ad {
    padding: 20px 0;
    img {
        height: 110px;
        width: 190px;
    }
}
</style>
