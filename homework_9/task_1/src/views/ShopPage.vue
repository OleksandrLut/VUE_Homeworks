<template>
  <div class="page">
    <div class="shop-container">
      <shop-component/>
    </div>
  </div>
</template>

<script>
import ShopComponent from "@/components/ShopComponent.vue";

export default {
  name: "ShopPage",
  components: {
    ShopComponent,
  },
};
</script>
<style lang="scss">
.shop-container{
  padding-top: 50px;
}
</style>