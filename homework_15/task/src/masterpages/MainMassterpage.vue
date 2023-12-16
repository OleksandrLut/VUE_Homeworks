<template>
  <div class="wrapper">
    <header class="header">
      <div class="header__container">
        <nav class="header__menu">
          <slot name="header">
            <router-link to="/">Головна</router-link>
            <router-link :to="{name: 'lessons-select'}">Уроки</router-link>
            <router-link to="/teachers">Вчителі</router-link>
          </slot>
        </nav>
        <div v-if="authParams" class="header__auth">
          <span>{{ userName }}</span>
          <button @click="onLogout">Вихід</button>
        </div>
        <div v-else class="header__auth">
            <button @click="onLoginPage">Вхід</button>
          </div>
      </div>
    </header>

    <main class="page">
      <div class="page__container">
        <slot></slot>
      </div>
    </main>

    <footer class="footer">
      <div class="footer__container">
        <div class="footer__logo">
          <font-awesome-icon :icon="['fab', 'html5']" size="2x" color="#1f5ad1"/>
        </div>
        <div class="footer__logo">
          <font-awesome-icon :icon="['fab', 'sass']" size="2x" color="#d27cdd"/>
        </div>
        <div class="footer__logo">
          <font-awesome-icon :icon="['fab', 'square-js']" size="2x" color="#dcea1c"/>
        </div>
        <div class="footer__logo">
          <font-awesome-icon :icon="['fab', 'vuejs']" size="2x" color="#14c99c"/>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
  export default {
    name: 'MainMassterpage',
    computed: {
      authParams(){
        const params = localStorage.getItem('authParams')
        return params ? JSON.parse(params) : null
      },
      userName() {
        return this.authParams?.userName
      }
    },
    methods: {
      onLogout() {
        localStorage.removeItem('authParams')
        this.$router.push({
          name: 'login',
        })
      },
      onLoginPage(){
        this.$router.push({
          name: 'login',
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}
[class*="__container"] {
  max-width: 1280px;
  padding: 0 15px;
  margin: 0 auto;
}
.header {
  padding: 5px 0;
  background-color: #d3dfe5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
		// .header__container
		&__container {
      min-height: 90px;
      display: flex;
      column-gap: 20px;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }
		// .header__menu
		&__menu {
      display: flex;
      align-items: center;
      gap: 40px;
    }
    // .header__auth
		&__auth {
      display: flex;
      align-items: center;
      gap: 30px;
      span{
        font-weight: 600;
      }
      button{
        border: 1px solid gray;
        padding: 0 10px;
        box-shadow: 0 0 2px gray;
        transition: all 0.3s ease 0s;
        &:hover{
          background-color: #00b29a;
          color: #fff;
        }
      }
    }
}
.page {
  flex: 1 1 auto;
  padding-top: 120px;
  padding-bottom: 50px;
		// .page__container
		&__container {}
}
.footer {
  flex: 0 0 auto;
  padding: 10px 0;
  background-color: #d3dfe5;
		// .footer__container
		&__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
		// .footer__logo
		&__logo {}
}

nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.header {
		// .header__auth
		&__auth {}
}


</style>