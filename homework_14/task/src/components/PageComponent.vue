<template>
  <div class="page">
    <h1 class="page__title">
      <slot name="page-title"></slot>
    </h1>

    <div class="page__content">
      <slot name="main"></slot>
    </div>

    <div class="page__footer footer-page">
      <div class="footer-page__left">
        <slot name="page-left">
          {{ shopRating ?? leftContent }}
        </slot>
      </div>
      <div class="footer-page__right">
        <slot name="page-right">
          {{ rightContent ?? shopStatus }}
        </slot>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'PageComponent',
    props: {
      leftContent: {
        type: String,
        default: ''
      },
      rightContent: {
      type: String,
    },
    },
    data() {
      return {
        shopRating: 'Рейтинг магазину: 54567',
      }
    },
    computed: {
      isOpen() {
        const currentTime = new Date().getHours();
        return currentTime >= 9 && currentTime <= 19;
      },
      shopStatus() {
        let statusText = this.isOpen ? 'відкрито' : 'закрито';
        return 'Статус: ' + statusText
      },
    },
  }
</script>

<style lang="scss" scoped>
.page {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
		// .page__title
		&__title {}
		// .page__content
		&__content {
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
		// .page__footer
		&__footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
}
.footer-page {
		// .footer-page__left
		&__left {}
		// .footer-page__right
		&__right {}
}

</style>