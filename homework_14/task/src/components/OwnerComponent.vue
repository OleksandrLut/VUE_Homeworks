<template>
  <div class="owner">
    <div class="owner__title">Власник:</div>
    <div class="owner__name">{{ name }}</div>
    <div class="owner__image">
      <img :src="imgSrc" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'OwnerComponent',
    data() {
      return {
        name: 'Баба Галя',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpZx_biR84Qe-Fr8_BXYDJklWeLSHY9JLlOaKuajWJWYyOZa7b4rx3Cvmn270oBe3-elE&usqp=CAU'
      }
    },
  }
</script>

<style lang="scss" scoped>
.owner {
  display: flex;
  align-items: center;
  gap: 10px;
		// .owner__title
		&__title {}
		// .owner__name
		&__name {
      font-weight: 600;
    }
		// .owner__image
		&__image {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid rgb(56, 161, 56);
      img{
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
}

</style>