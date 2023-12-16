<template>
  <main-massterpage>
    <div class="not-found">
      <div class="not-found__icon">
        <font-awesome-icon :icon="['fas', 'triangle-exclamation']" size="10x" color="#42b983" />
      </div>
      <div class="not-found__title">
        This_Page_Not_Found: 404
      </div>
    </div>
  </main-massterpage>
</template>

<script>
import MainMassterpage from "@/masterpages/MainMassterpage.vue";

  export default {
    name: 'PageNotFound',
    components: { MainMassterpage },
  }
</script>

<style lang="scss" scoped>
.not-found {
		// .not-found__title
		&__title {
      font-size: 22px;
    }
		// .not-found__icon
		&__icon {
      margin-bottom: 50px;
    }
}

</style>