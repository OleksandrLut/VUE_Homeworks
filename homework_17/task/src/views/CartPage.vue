<template>
  <main-masterpage>
    <div class="cart page-padding-top">
      <div class="cart__container">
        <h1 class="cart__title">{{ $t('header.menu.cart') }}</h1>
        <ul class="cart__list">
          <li v-for="productId in cartList" :key="productId" class="cart__iten">
            <span>{{ getItemById(productId).title }}</span>
            <span>{{ getItemById(productId).price }} грн</span>
            <v-btn color="red" @click="removeFromCart(productId)">{{ $t('buttons.delete') }}</v-btn>
          </li>
        </ul>
        <div class="cart__button">
          <v-btn color="green" :disabled="!getUser">{{ $t('buttons.buy') }}</v-btn>
        </div>
      </div>
    </div>
  </main-masterpage>
</template>

<script>
import MainMasterpage from "@/masterpages/MainMasterpage.vue";
import { mapGetters, mapActions } from "vuex";

  export default {
    name: 'CartPage',
    components: { MainMasterpage, },
    computed: {
      ...mapGetters('cart', ['cartList']),
      ...mapGetters('products', ['getItemById']),
      ...mapGetters('auth', ['getUser'])
    },
    methods: {
      ...mapActions('cart', ['removeFromCart'])
    },
  }
</script>

<style lang="scss" scoped>
.cart {
		// .cart__container
		&__container {}
		// .cart__title
		&__title {
      font-size: 20px;
      margin-bottom: 30px;
    }
		// .cart__list
		&__list {
      margin-bottom: 20px;
      li{
        display: flex;
        align-items: center;
        gap: 20px;
        &:not(:last-child) {
          margin-bottom: 10px;
        }
        span{
          &:first-child{
            flex: 1 1 auto;
          }
        }
      }
    }
		// .cart__button
		&__button {}
}
.page-padding-top {
}

</style>