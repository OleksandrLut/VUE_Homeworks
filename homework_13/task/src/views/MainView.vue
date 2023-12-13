<template>
  <div class="main page">
    <h1 class="main__title title-page">Головна</h1>
    <p>
      Вітаємо <span class="user-name">{{ userName }}</span> на сайті школи <br>
      У нашій школі учень сам вибирає уроки і вчителів!
    </p>
  </div>
</template>

<script>
import { mapGetters} from 'vuex';

export default {
  name: "MainView",
  data() {
    return {
      massage: 'Увійдіть для повноцінного іикористання',
    }
  },
  computed: {
    ...mapGetters(['userName']),
  },
};
</script>


<style lang="scss">
.main {
		// .main__container
		&__container {
      p{
        line-height: 1.5;
        margin-bottom: 40px;
      }
      button{
        margin-bottom: 30px;
      }
    }
		// .main__title-page
		&__title-page {}
}
.page {
}
.user-name {
  font-weight: 700;
  font-size: 16px;
  text-transform: capitalize;
}
</style>