<template>
  <main-wrapper-masterpage>
    <div class="product-add page">
      <h2 class="product-add__title">Додати новий товар</h2>
      <div class="product-add__body">
        <div class="product-add__item">
          <label for="product-title">Назва товару:</label>
          <input 
          v-model="newProduct.title"
          type="text" 
          id="product-title">
        </div>
        <div class="product-add__item">
          <label for="product-price">Ціна товару:</label>
          <input 
          v-model="newProduct.price"
          type="number" 
          id="product-price">
        </div>
        <div class="product-add__item">
          <label for="product-image">Шлях до зображення товару:</label>
          <input 
          v-model="newProduct.imgSrc"
          type="text" 
          id="product-image">
        </div>
      </div>
      <div class="product-add__button">
        
        <button 
        @click="addProuctToList"
        :disabled="isDisabled"
        class="btn">
          додати
        </button>

        <button 
        @click="onReturn"
        class="btn">
          повернутись
        </button>

      </div>
    </div>
  </main-wrapper-masterpage>
</template>

<script>
import MainWrapperMasterpage from "@/masterpages/MainWrapperMasterpage.vue";
import { mapActions } from 'vuex';

  export default {
    name: 'EditorProductView',
    components: { MainWrapperMasterpage },
    data() {
      return {
        newProduct: {}
      }
    },
    computed: {
      isDisabled() {
        return ['title', 'price', 'imgSrc'].some((key) => !this.newProduct[key])
      }
    },
    methods: {
      ...mapActions(['addNewProduct']),
      addProuctToList(){
        this.addNewProduct(this.newProduct)
        this.newProduct = {}
      },
      onReturn(){
        this.$router.push({
          name: 'products'
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
.product-add {
		// .product-add__title
		&__title {
      font-weight: 600;
      margin-bottom: 30px;
    }
		// .product-add__body
		&__body {
      display: grid;
      gap: 15px;
      margin-bottom: 30px;
      max-width: 500px;
    }
		// .product-add__item
		&__item {
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: space-between;
      input{
        padding: 5px 10px;
        border-radius: 8px;
        border: 2px solid rgb(56, 161, 56);
        background-color: transparent;
      }
    }
		// .product-add__button
		&__button {
      display: flex;
      align-items: center;
      gap: 40px;
    }
}
.page {
}
.btn {
}

</style>