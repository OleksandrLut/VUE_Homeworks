<template>
  <main-master-page>
    <div class="login top-page-pad">
      <div class="login__form">
        <div class="login__inputs">
          <div class="login__item">
            <label for="login">Логін:</label>
            <input id="login" v-model="userLogin" type="text">
          </div>
          <div class="login__item">
              <label for="pass">Пароль:</label>
              <input id="pass" v-model="userPassword" type="password">
            </div>
        </div>
        <div class="login__button">
          <button
          class="_btn"
          :disabled="!userLogin || !userPassword"
          >
            Вхід
          </button>
        </div>
      </div>
    </div>
  </main-master-page>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterPage.vue";

  export default {
    name: 'LoginPage',
    components: { MainMasterPage, },
    data() {
      return {
        userLogin: null,
        userPassword: null,
      }
    },
  }
</script>

<style lang="scss" scoped>
.login {
		// .login__form
		&__form {
      text-align: center;
    }
		// .login__inputs
		&__inputs {
      margin-bottom: 30px;
    }
		// .login__item
		&__item {
      &:not(:last-child) {
        margin-bottom: 15px;
      }
      label{
        display: inline-block;
        width: 70px;
        text-align: left;
      }
      input{
        width: 200px;
        border: 1px solid #53565a;
        border-radius: 14px;
        padding: 2px 15px;
      }
    }
		// .login__button
		&__button {}
}

</style>
