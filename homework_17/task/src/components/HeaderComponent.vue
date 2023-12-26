<template>
    <div class="header__top"></div>
    <div class="header__middle">
      <div class="header__container">
        <nav class="header__menu menu-header">
          <router-link class="menu-header__item" to="/">{{ $t('header.menu.main') }}</router-link>
          <router-link v-if="isNotMain" class="menu-header__item" :to="{ name: 'contacts' }">{{ $t('header.menu.contacts') }}</router-link>
        </nav>
      </div>
    </div>
    <div class="header__bottom">
      <div class="header__container">
        
        <div class="header__locale">
          <button :class="{ 'active': $i18n.locale === 'en' }" @click="onLocaleChange('en')" >EN</button>
          <span>|</span>
          <button :class="{ 'active': $i18n.locale === 'ua' }" @click="onLocaleChange('ua')">UA</button>
        </div>

        <div class="header__cart">
          <button @click="onCartAction">
            <font-awesome-icon :icon="['fas', 'cart-shopping']" />
          </button>
          <div v-if="cartList.length">{{ coutProductsInCart }}</div>
        </div>
        <div v-if="getUser" class="header__user-info user-info">
          <div class="user-info__name">
            <span v-if="getUser.displayName">{{ getUser.displayName }}</span>
            <span v-else>Guest</span>
          </div>
          <div class="user-info__logo">
            <img v-if="getUser.photoURL" :src="getUser.photoURL" alt="img">
            <p v-else class="user-info__initials">{{ userInitials }}</p>
          </div>
          <div class="user-info__button">
            <button @click="onLogout">
              <span>{{ $t('buttons.logout') }} </span>
              <font-awesome-icon :icon="['fas', 'right-from-bracket']" color="#ffffff" />
            </button>
          </div>
        </div>

        <div v-else>
          <div v-if="isNotMain" class="header__login">
            <button @click="onLoginPage">
              <font-awesome-icon class="btn-ico" :icon="['far', 'user']" />
              <span>{{ $t('buttons.login') }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HeaderComponent',
  data() {
    return {
      userInitials: 'G',
    }
  },
  computed: {
    ...mapGetters('auth', ['getUser']),
    ...mapGetters('cart', ['cartList']),
    isNotMain(){
      return this.$route.name === 'login' || this.$route.name === 'pageNotFound' ? false : true
    },
    coutProductsInCart(){
      return this.cartList.length
    }
  },
  created () {
    
  },
  methods: {
    ...mapActions('auth', [ 'logout', 'clearStoreList']),
    ...mapActions('users', ['clearPermissions']),
    onLogout(){
      this.logout()
      this.$router.go()
      this.clearStoreList()
      this.clearPermissions()
    },
    onLocaleChange(lang) {
      this.$i18n.locale = lang
      localStorage.setItem('lastLocale', lang)
    },
    onLoginPage(){
      this.$router.push({ name: 'login' })
    },
    onCartAction(){
      this.$router.push({ name: 'cart' })
    }
  },
}
</script>

<style lang="scss"></style>