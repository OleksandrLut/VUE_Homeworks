<template>
  <a :href="product.link" target="_blank" class="product-card">
    <div class="product-card__container">
      <div class="product-card__image">
        <img :src="product.imgSrc" alt="img">
      </div>
      <div class="product-card__content">
        <h2 class="product-card__title">{{ product.title }}</h2>
        <div class="product-card__price">{{ product.price }}</div>
        <div class="product-card__old-price">{{ product.oldPrice }}</div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.product-card {
  max-width: 350px;
  border: 1px solid rgba(000, 000, 000, 0.2);
  padding: 5px;
  transition: all 0.3s ease 0s;
  &:hover {
    border: 1px solid rgba(000, 000, 000, 0.6);
    transform: scale(1.02);
  }
		// .product-card__container
		&__container {
      display: flex;
      align-items: center;
      gap: 5px;
    }
		// .product-card__image
		&__image {
      flex: 0 0 100px;
      width: 100px;
      height: 100px;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
		// .product-card__content
		&__content {
      
      text-align: left;
    }
		// .product-card__title
		&__title {
      font-size: 16px;
      margin-bottom: 10px;
    }
		// .product-card__price
		&__price {
      font-size: 18px;
      font-weight: 700;
      // margin-bottom: 5px;
    }
		// .product-card__old-price
		&__old-price {
      font-size: 14px;
      text-decoration: line-through;
      color: rgba(000, 000, 000, 0.5);
    }
}

</style>