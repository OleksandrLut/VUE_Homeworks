<template>
  <div class="login-page page">
    <div class="login-page__container">
      <div class="login-page__item user-name">
        <label>Імя</label>
        <input v-model="userName" type="text" />
      </div>
      <div class="login-page__item user-path">
        <label>Пароль</label>
        <input v-model="userPass" type="password" />
      </div>
      <button class="login-page__button btn" :disabled="isDataEnter" @click="onLogin">
        Вхід
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'LoginPage',
  data() {
    return {
      userNameValue: null,
      userPassValue: null,
    };
  },
  computed: {
    isDataEnter() {
      return this.userNameValue === null || this.userPassValue === null;
    },
    userName: {
      get() {
        return this.userNameValue;
      },
      set(newVal) {
        this.userNameValue = newVal
        this.setUserName(newVal);
      },
    },
    userPass: {
      get() {
        return this.userPassValue;
      },
      set(newVal) {
        this.userPassValue = newVal
        this.setUserPass(newVal);
      },
    },
  },
  methods: {
    ...mapActions(['setUserName', 'setUserPass']),
    onLogin() {
      if (this.$route.query.redirect) {
        this.$router.push({
          path: this.$route.query.redirect,
        });
      } else {
        this.$router.push({
          path: '/',
        });
      }
    },
  },
};
</script>


<style lang="scss" scoped>
.login-page {
		// .login-page__container
		&__container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
		// .login-page__user-name
		&__item {
      display: flex;
      align-items: center;
      gap: 10px;
      label{
        font-size: 18px;
      }
      input{
        background-color: rgba(255,255,255,0.6);
        border-radius: 6px;
        border: 1px solid rgb(56, 161, 56);
        padding: 5px 10px;
        font-size: 18px;
      }
    }
		// .login-page__user-path
		&__user-path {}
		// .login-page__button
		&__button {}
}
.page {
}
.btn {
}

</style>


