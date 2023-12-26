<template>
  <router-view />
</template>

<script>
import { mapActions } from 'vuex'


export default {
  created() {
    if (localStorage.getItem('authCredential'))
      this.loginWithCredential()

    this.$i18n.locale = localStorage.getItem('lastLocale') ?? process.env.VUE_APP_I18N_LOCALE
    const self = this
    window.addEventListener('storage', function () {
      if (self.$i18n.locale !== localStorage.getItem('lastLocale')) {
        self.$i18n.locale = localStorage.getItem('lastLocale')
        self.$router.go()
      }
    })

  },
  methods: {
    ...mapActions('auth', ['loginWithCredential'])
  },
}
</script>

<style lang="scss">

@import '@/assets/style';

</style>
