<template>
  <div class="item-card">
    <div class="item-card__image">
      <img :src="imageSrc" alt="image">
    </div>
    <h4 class="item-card__title">
      {{ cardTitle }}
    </h4>
    <div class="item-card__info">
      <slot>
        {{ cardPrice }} грн
      </slot>
    </div>
    <div class="item-card__button">
      <button class="btn">Купити</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    cardTitle: {
      type: String,
      required: true,
    },
    cardPrice: {
      type: Number,
      default: 0,
    },
  },
};
</script>


<style lang="scss" scoped>
.item-card {
  border: 2px solid #fff;
  border-radius: 8px;
  padding: 10px;
  display: grid;
  grid-template-rows: 230px 1fr 1fr 1fr;
  gap: 15px;
  &:hover{
    .item-card__image{
      img{
        transform: scale(1.03);
      }
    }
  }
		// .item-card__image
		&__image {
      width: 230px;
      height: 230px;
      background-color: #fff;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
        object-fit: contain;
        transition: all 0.3s ease 0s;
      }
    }
		// .item-card__title
		&__title {
      text-align: center;
    }
		// .item-card__info
		&__info {
      text-align: center;
    }
		// .item-card__button
		&__button {
      text-align: center;
    }
}

</style>