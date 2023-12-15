<template>
  <header class="header">
    <div class="header__container">
      <nav class="header__menu menu">
        <router-link to="/" class="menu__item">Головна</router-link>
        <router-link to="/products" class="menu__item">Товари</router-link>
        <router-link to="/provisors" class="menu__item">Постачальники</router-link>
        <router-link to="/contacts" class="menu__item">Контакти</router-link>
        <router-link to="/shopping-rules" class="menu__item">Правила купівлі</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'HeaderComponent',
  }
</script>

<style lang="scss" scoped>
.header {
  background-color: rgb(51, 50, 50);
  padding-top: 10px;
  padding-bottom: 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
		// .header__container
		&__container {
    }
		// .header__menu
		&__menu {
      min-height: 60px;
      display: flex;
      align-items: center;
      column-gap: 20px;
      row-gap: 5px;
      justify-content: space-evenly;
      flex-wrap: wrap;
    }
}
.menu {
		// .menu__item
		&__item {
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
      &.router-link-exact-active {
        color: rgb(56, 161, 56);
      }
    }
}
</style>