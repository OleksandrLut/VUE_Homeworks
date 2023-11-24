<template>
  <div class="header">
    <div class="header__container">
      <div class="header__title">Lesson 11 | <span>homework</span> |</div>
       <nav class="header__menu menu">
        <router-link to="/" class="menu__item">Main</router-link>
        <router-link :to="{ name: 'drivers' }" class="menu__item">Divers</router-link>
         <router-link :to=" {name: 'busses'} " class="menu__item">Busses</router-link>
         <router-link :to="{ name: 'appointment' }" class="menu__item">Appointment</router-link>
         <router-link :to="{ name: 'contacts'}" class="menu__item">Contacts</router-link>
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
.header {
  background-color: rgb(51, 50, 50);
		// .header__container
		&__container {
      // max-width: 1470px;
      // padding: 0 15px;
      // margin: 0 auto;
      min-height: 60px;
      display: flex;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
    }
		// .header__title
		&__title {
      flex: 0 0 auto;
      font-weight: 600;
      font-size: 30px;
      color:  rgb(56, 161, 56);
      span {
        color: rgb(51, 127, 250);
      }
    }
    // .header__menu
		&__menu {}
}

.menu {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 40px;
		// .menu__item
		&__item {
      font-weight: bold;
      color: rgb(51, 127, 250);
      &:hover{
        text-decoration: underline;
      }
      &.router-link-exact-active {
        color: rgb(56, 161, 56);
      }
    }
}


</style>