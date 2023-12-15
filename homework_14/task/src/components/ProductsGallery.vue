<template>
  <div class="products-gallery">
    <div class="products-gallery__header">
     <div>
        <button class="btn" @click="onSearchButtonClick">Пошук <span>&#128269;</span></button>
        <search-component v-show="isVisivle"/>
     </div>
      <button 
      @click="onAddClick"
      class="btn">Додати товар</button>
    </div>
    <div class="products-gallery__body">
      <div
      v-for="product in getFilteredList"
      :key="product.id"
      >
        <item-card 
        :imageSrc="product.imgSrc"
        :cardTitle="product.title"
        :cardPrice="product.price"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ItemCard from './ItemCard.vue';
import SearchComponent from '@/components/SearchComponent.vue';


  export default {
    name: 'ProductsGallery',
    components: { ItemCard, SearchComponent },
    data() {
      return {
        isVisivle: false
      }
    },
    computed: {
      ...mapGetters(['getFilteredList'])
    },
    created () {
      this.loadProducts();
    },
    methods: {
      ...mapActions(['loadProducts']),
      onSearchButtonClick() {
        this.isVisivle = !this.isVisivle;
      },
      onAddClick(){
        this.$router.push({
          name: "editor"
        })
      },
    },
}
</script>

<style lang="scss" scoped>
.products-gallery {
		// .products-gallery__header
		&__header {
      margin-bottom: 30px;
      display: flex;
      justify-content: space-between;
      div{
        display: flex;
      }
    }
		// .products-gallery__body
		&__body {
      display: grid;
      grid-template-columns: repeat(5, 250px);
      gap: 30px;
      margin-bottom: 50px;
    }
}

</style>