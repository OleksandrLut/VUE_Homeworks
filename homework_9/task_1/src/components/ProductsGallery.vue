<template>
  <div class="products-gallery">
    <div class="products-gallery__container">
      <product-card
      v-for="productItem in currentProductCategoryList"
      :key="productItem.id"
      :product="productItem"
      />
    </div>
    <button class="products-gallery__btn" @click="goBackTo">До списку товарів</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductCard from './ProductCard.vue';

  export default {
    name: "ProductsGallery",

    components: { ProductCard },

    data() {
      return {
        currentProductCategoryList: [],
      }
    },

    computed: {
        ...mapGetters(["notebooks", "tv", "phones", "monitors", "currentProductList"]),
        productCategory(){
          return this.$route.params.productCategory
        }
    },
    created () {
      this.currentProductCategoryList = this.currentProductList(this.productCategory)
    },
    methods: {
      goBackTo() {
        this.$router.push({
          path: '/shop'
        })
      }
    },
}
</script>

<style lang="scss" scoped>
.products-gallery {
  padding: 120px 20px 20px;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
		// .products-gallery__container
		&__container {
      display: grid;
      grid-template-columns: repeat(auto-fill, 350px);
      justify-content: center;
      gap: 20px;
    }
    &__btn{
      display: inline-block;
      margin: 0 auto;
      cursor: pointer;
      font-size: 20px;
      font-weight: 600;
      padding: 5px 20px;
      border-radius: 8px;
      background-color: rgb(107, 24, 40);
      color: #fff;
      transition: all 0.3s ease 0s;
      &:hover{
        background-color: rgb(198, 8, 46);
        box-shadow: 0 0 5px #000;
      }
    }
}

</style>