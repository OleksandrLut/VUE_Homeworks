<template>
  <main-masterpage>
    <div class="login">
      <div class="login__container">
        <p>{{ $t('messages.lodinPage') }}</p>
        <v-btn color="green" @click="onLoginAction">{{ $t('buttons.login') }}</v-btn>
      </div>
    </div>
  </main-masterpage>
</template>

<script>
import MainMasterpage from "@/masterpages/MainMasterpage.vue";
import { mapActions } from "vuex";

  export default {
    name: 'LoginPage',
    components: { MainMasterpage, },
    methods: {
      ...mapActions('auth', ['loginWithGoogle']),
      async onLoginAction() {
        try {
          await this.loginWithGoogle();
          if (this.$route.query.redirect) {
          this.$router.push({ path: this.$route.query.redirect })
          } else {
            this.$router.push({ name: 'home', })
          }
        } catch (error) {
          alert('помилка аутентифікації')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

.login {
		// .login__container
		&__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 40px;
      height: 50vh;
      p{
        font-size: 20px;
      }
    }
}


</style>