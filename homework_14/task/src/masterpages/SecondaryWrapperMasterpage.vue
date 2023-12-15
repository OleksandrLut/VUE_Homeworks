<template>
  <div class="secondary-wrap">
    <div class="secondary-wrap__header header-wrap">
      <div class="header-wrap__container">
        <button @click="toMain">На головну</button>
      </div>
    </div>
    
    <div class="secondary-wrap__body">
      <slot></slot>
    </div>

    <div class="secondary-wrap__footer footer-wrap __container">
      <h3 class="footer-wrap__title">Галерея</h3>
      <div class="footer-wrap__gallery">
        <div 
        v-for="item in galleryList"
        :key="item.id"
        class="footer-wrap__item">
          <img :src="item.link" alt="image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { galleryList } from "@/data/data";

  export default {
    name: 'SecondaryWrapperMasterpage',
    data() {
      return {
        galleryList
      }
    },
    methods: {
      toMain() {
        this.$router.push({
          name: 'main'
        })
      }
    },
}
</script>

<style lang="scss" scoped>
.secondary-wrap {
  display: flex;
  flex-direction: column;
		// .secondary-wrap__header
		&__header {
      background-color: rgb(51, 50, 50);
      padding-top: 10px;
      padding-bottom: 10px;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 100;
    }
		// .secondary-wrap__body
		&__body {
      flex: 1 1 auto;
      min-height: 50vh;
    }
		// .secondary-wrap__footer
		&__footer {}
}
.footer-wrap {
		// .footer-wrap__title
		&__title {
      font-size: 20px;
      margin-bottom: 15px;
    }
		// .footer-wrap__gallery
		&__gallery {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
		// .footer-wrap__item
		&__item {
      width: 275px;
      height: 183px;
      img{
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
}

.header-wrap {
		// .header-wrap__container
		&__container {
       min-height: 60px;
       display: flex;
       align-items: center;
      button{
        flex: 0 0 auto;
        font-size: 22px;
        line-height: 1.5;
        font-weight: bold;
        color: rgb(51, 127, 250);
        position: relative;
        transition: all 0.3s ease 0s;
        &::after{
          content:'';
          width: 0;
          height: 2px;
          position: absolute;
          bottom: 0;
          left: 50%;
          background-color: rgb(56, 161, 56);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease 0s;
        }
        &:hover{
          color: rgb(56, 161, 56);
          &::after{
            width: 100%;
            left: 0;
            opacity: 1;
            visibility: visible;
          }
        }
        &:focus{
          color: rgb(56, 161, 56);
        }
      }
    }
}


</style>