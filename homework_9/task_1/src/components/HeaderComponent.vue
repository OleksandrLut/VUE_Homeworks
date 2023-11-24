<template>
  <div class="header">
    <div class="header__container">
      <nav class="header__menu">
        <router-link to="/">Головна</router-link>
        <router-link to="/shop">Магазин</router-link>
        <router-link to="/payment">Оплата</router-link>
        <router-link to="/contacts">Контакти</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HeaderComponent',
  }
</script>

<style lang="scss" scoped>
nav {
  padding: 30px;
  display: flex;
  gap: 40px;
  justify-content: center;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 10px 15px;
    border: 1px solid rgba(0,0,0,0.4);
    border-radius: 6px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.header {
  background-color: #58fab1;
		// .header__container
		&__container {

    }
		// .header__menu
		&__menu {}
}

</style>