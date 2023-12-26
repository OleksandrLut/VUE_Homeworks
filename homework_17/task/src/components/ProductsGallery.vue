<template>
  <div class="products-gallery">
    
    <div v-if="userPermissions.write" class="products-gallery__admin-button">
      <v-btn color="yellow" @click="onAddPage">{{ $t('buttons.add') }}</v-btn>
    </div>

    <div class="products-gallery__body">
      <div 
      v-for="product in getFilteredProductsList"
      :key="product.id"
      class="products-gallery__item product-card"> 
        <div class="product-card__image">
          <img :src="product.photo" alt="img">
        </div>
  
        <h3 class="product-card__title">{{ product.title }}</h3>
        
        <div class="product-card__proce">{{ product.price }}</div>
        
        <div class="product-card__buttons">
          <v-btn color="green" @click="onAddToCart(product.id)">{{ $t('buttons.buy') }}</v-btn>
          <div v-if="userPermissions" class="product-card__admin-btn">
            <v-btn v-if="userPermissions.update" color="blue" @click="onUpdateProductAction(product.id)">{{ $t('buttons.edit') }}</v-btn>
            <v-btn v-if="userPermissions.delete" color="red" @click="onDeleteProduct(product.id)">{{ $t('buttons.delete') }}</v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';


  export default {
    name: 'ProductsGallery',
    computed: {
      ...mapGetters('products', ['getItemsList', 'getFilteredProductsList']),
      ...mapGetters('users', ['userPermissions'])
    },
    methods: {
      ...mapActions('cart', ['addToCart']),
      ...mapActions('products', ['deleteItem']),
      onAddPage(){
        this.$router.push({ name: 'editor' })
      },
      onAddToCart(productId){
        this.addToCart(productId)
      },
      onUpdateProductAction(productId){
        this.$router.push({
          name: 'editor',
          params: { productId: productId }
        })
      },
        onDeleteProduct(productId) {
        this.deleteItem(productId);
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>