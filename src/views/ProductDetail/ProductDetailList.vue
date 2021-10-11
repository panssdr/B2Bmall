<template>
  <div class="product-detail-list">
    <detail-left></detail-left>
    <detail-right style="margin-left:50px;"></detail-right>
  </div>
</template>

<script>
import DetailLeft from "./cpns/DetailLeft.vue";
import DetailRight from "./cpns/DetailRight.vue";
export default {
  name: "ProductDetailList",
  components: { DetailLeft, DetailRight },
};
</script>

<style lang="scss" scoped>
.product-detail-list {
  display: flex;
  justify-content: flex-start;
  align-content: center;
  margin: 0 200px;
  
}
</style>
