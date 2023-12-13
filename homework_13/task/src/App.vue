<template>
  <div class="wrapper">
    <header-component />
    <div class="page__container">
      <router-view />
      <div
      v-show="!isButtonVisible"
      class="button">
        <button 
          class="btn"
          @click="onAction"
        >
          {{ buttonTitle }}
        </button>
        <div v-show="isUserAuth" class="account">
          Акаунт: <span>{{ userName }}</span>
        </div>
        <div
          v-show="!isUserAuth"
          class="massage"
        >
          {{ massage }}
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import HeaderComponent from '@/components/HeaderComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
  },
  computed: {
    ...mapGetters(['userName', 'isUserAuth']),
    buttonTitle() {
      return this.isUserAuth ? 'Вихід' : 'Вхід'
    },
    isButtonVisible(){
      return this.$route.path === "/loginPage" || this.$route.name === "pageNotFound"
    }
  },
  methods: {
    ...mapActions(['clearUserAuth']),
    onAction() {
      if (!this.isUserAuth) {
        this.$router.push({ path: 'loginPage' })
      } else {
        this.clearUserAuth()
        this.$router.push({ path: '/' })
      }
    },
  },
}
</script>

<style lang="scss">
@import url(@/assets/style/_reset.scss);
@import url(@/assets/style/common.scss);

.wrapper {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.page__container{
  position: relative;
  .button {
    position: absolute;
    top: 10px;
    right: 0;
    width: 150px;
    text-align: right;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    .btn {
      margin-bottom: 10px;
    }
  }
}
.massage {
}
.account{
  span{
    font-weight: 600;
    text-transform: capitalize;
  }
}


</style>
