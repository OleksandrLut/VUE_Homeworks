<template>
  <main-masterpage>
    <div class="page-not-found">
      <div class="page-not-found__container">
        <font-awesome-icon :icon="['fas', 'link-slash']" size="5x" color="#00dcbf" />
        <p>{{ $t('messages.pageNotFound') }}</p>
      </div>
    </div>
  </main-masterpage>
</template>

<script>
import MainMasterpage from "@/masterpages/MainMasterpage.vue";

  export default {
    name: 'PageNotFound',
    components: { MainMasterpage, },
  }
</script>

<style lang="scss" scoped>
.page-not-found {
		// .page-not-found__container
		&__container {
      display: flex;
      flex-direction: column;
      gap: 40px;
      align-items: center;
      justify-content: center;
      height: 50vh;
      p{
        font-size: 22px;
      }
    }
}

</style>