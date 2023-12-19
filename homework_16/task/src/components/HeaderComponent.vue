<template>
  <headr class="header">
    <div class="header__top"></div>
    <div class="header__middle">
      <div class="header__container">
        <nav class="header__menu menu-header">
          <router-link class="menu-header__item" to="/">Головна</router-link>
          <router-link class="menu-header__item" :to="{ name: 'drivers'}">Водії</router-link>
          <router-link class="menu-header__item" :to="{ name: 'busses' }">Автобуси</router-link>
          <router-link class="menu-header__item" :to="{ name: 'appointments'}">Призначення</router-link>
          <router-link class="menu-header__item" :to="{ name: 'contacts'}">Контакти</router-link>
        </nav>
      </div>
    </div>
    <div class="header__bottom">
      <div class="header__container">
        <div class="header__login">
          <button
          @click="onAuthTo"
          >
            <font-awesome-icon class="btn-ico" :icon="['far', 'user']" />
            <span>Вхід</span>
          </button>
        </div>
      </div>
    </div>

  </headr>
</template>

<script>
  export default {
    name: 'HeaderComponent',
    methods: {
      onAuthTo() {
        this.$router.push({
          name: 'loginPage'
        })
      }
    },
  }
</script>

<style lang="scss">

.header {
  background-color: #e1dfdd;
  // padding: 5px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

    // .header__top
    &__top {
      height: 20px;
      background-color: #fff;
    }
		// .header__container
		&__container {
    }
		// .header__menu
		&__menu {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      height: 100%;
    }
    // .header__bottom
		&__bottom {
      background-color: #53565a;
      padding: 5px 0;
    }
		// .header__container
		&__container {
    }
		// .header__login
		&__login {
      color: #fff;
      display: flex;
      justify-content: flex-end;
      padding-right: 10%;
      button{
        padding: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        span{
          font-size: 18px;
        }
        &:hover{
          .btn-ico{
            transform: scale(1.2);
          }
        }
      }
    }
}
.btn-ico{
  transition: all 0.3s ease 0s;
}
.menu-header {
		// .menu-header__item
		&__item {
      font-size: 22px;
      line-height: 1.4;
      padding: 20px 30px;
      transition: all 0.3s ease 0s;
      position: relative;
      &:hover{
        background-color: #fff;
        &::after{
          opacity: 1;
          visibility: visible;
          width: 100%;
          left: 0;
        }
      }
      &::after{
        content:'';
        position: absolute;
        width: 0;
        height: 4px;
        bottom: 0;
        left: 50%;
        background-color: #01ab59;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease 0s;
      }
      &.router-link-exact-active{
        // color: #fff;
        background-color: #fff;
        &::after{
          opacity: 1;
          visibility: visible;
          width: 100%;
          left: 0;
          background-color: #53565a;
        }
      }
    }
}


</style>