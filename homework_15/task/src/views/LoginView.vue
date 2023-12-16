<template>
  <main-massterpage>
    <template #header>
      <router-link to="/">Головна</router-link>
    </template>
    <div class="login">
      <div class="login__form form-login">

        <div class="form-login__item">
          <label for="name">Імя:</label>
          <input 
          id="name" 
          v-model="userName"
          type="text" 
          placeholder="введіть імя"
          >
        </div>

         <div class="form-login__item">
            <label for="pass">Пароль:</label>
            <input 
            id="pass" 
            v-model="password"
            type="password" 
            placeholder="введіть пароль"
            >
          </div>

          <button 
          class="form-login__btn"
          :disabled="isDisabled"
          @click="onLogin"
          >
            Увійти
          </button>

      </div>
    </div>
  </main-massterpage>
</template>

<script>
import MainMassterpage from "@/masterpages/MainMassterpage.vue";

  export default {
    name: 'LoginView',
    components: { MainMassterpage },
    data() {
      return {
        userName: null,
        password: null,
      }
    },
    computed: {
      isDisabled() {
        return !this.userName || !this.password 
      }
    },
    methods: {
      onLogin() {
        localStorage.setItem('authParams', 
          JSON.stringify({
            userName: this.userName,
            token: 'testToken'
          })
        )
        this.$router.push({
          name: 'home'
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
.login {
  padding-top: 40px;
  display: flex;
  justify-content: center;
		// .login__form
		&__form {
      width: 260px;
    }
}
.form-login {
  display: grid;
  gap: 15px;
		// .form-login__item
		&__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      input{
        border: 1px solid #d3dfe5;
        border-radius: 8px;
        padding: 2px 10px;
      }
    }
		// .form-login__btn
		&__btn {
      background-color: #00dcbf;
      padding: 6px;
      text-transform: uppercase;
      font-weight: 600;
      border-radius: 17px;
      transition: all 0.3s ease 0s;
      &:hover{
        background-color: rgb(134, 197, 172);
      }
      &:disabled{
        background-color: #d3dfe5;
      }
    }
}

</style>