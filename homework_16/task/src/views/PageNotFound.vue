<template>
  <main-master-page>
    <div class="not-found top-page-pad">
        <div class="not-found__icon">
          <font-awesome-icon :icon="['fas', 'triangle-exclamation']" size="10x" color="#42b983" />
        </div>
        <div class="not-found__title">
          This_Page_Not_Found: 404
        </div>
      </div>
  </main-master-page>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterPage.vue";

  export default {
    name: 'PageNotFound',
    components: { MainMasterPage, },
  }
</script>

<style lang="scss" scoped>
.not-found {
  text-align: center;
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