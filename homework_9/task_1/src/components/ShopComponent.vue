<template>
  <div class="shop">
    <div class="shop__container">
      <h1 class="shop__title">Список товарів</h1>
      <ul class="shop__list">
        <li class="shop__item" @click="onProductCategoryClick('notebooks')">
          <div class="icon-img">
            <img src="https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/noutbuki.png" alt="img">
          </div>
          <h4>Ноутбуки</h4>
        </li>
        <li class="shop__item" @click="onProductCategoryClick('tv')">
          <div class="icon-img">
              <img src="https://video.rozetka.com.ua/img_superportal/smartfony_tv_i_elektronika/televizory.jpg" alt="img">
            </div>
            <h4>Телевізори</h4>
          </li>
          <li class="shop__item" @click="onProductCategoryClick('phones')">
            <div class="icon-img">
              <img src="https://content2.rozetka.com.ua/constructor/images_site/original/378644481.jpg" alt="img">
            </div>
            <h4>Телефони</h4>
          </li>
          <li class="shop__item" @click="onProductCategoryClick('monitors')">
            <div class="icon-img">
              <img src="https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/monitory.png" alt="img">
            </div>
            <h4>Монітори</h4>
          </li>
      </ul>
    </div>
    <!-- <products-gallery/> -->
  </div>
</template>

<script>

export default {
    name: "ShopComponent",
    methods: {
        onProductCategoryClick(category){
          this.$router.push({
            name: 'shop-gallery',
            params: {
              productCategory: category
            }
          })
        },
    },
};
</script>

<style scoped lang="scss">
.shop {
		// .shop__container
		&__container {
      max-width: 1470px;
      padding: 0 15px;
      margin: 0 auto;
      text-align: justify;
    }
		// .shop__title
		&__title {
      padding-left: 50px;
    }
		// .shop__list
		&__list {
      display: grid;
      grid-template-columns: repeat(2,1fr);
      column-gap: 10px;
      row-gap: 50px;
      justify-items: center;
    }
		// .shop__item
		&__item {
      padding: 15px 40px;
      border-radius: 10px;
      line-height: 2;
      font-size: 22px;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: all 0.3s ease 0s;
      cursor: pointer;
      &:hover{
        box-shadow: 0 0 8px #055;
        transform: scale(1.03);
      }
    }
}
.icon-img{
  width: 100px;
  height: 100px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
