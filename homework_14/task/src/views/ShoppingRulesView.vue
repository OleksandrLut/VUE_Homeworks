<template>
  <secondary-wrapper-masterpage>
    <div class="shopping-rules page __container">
      <h1 class="shopping-rules__title">
        Правила купівлі:
      </h1>
      <ul class="shopping-rules__list">
        <li class="shopping-rules__item">
          * Купуємо багато
        </li>
        <li class="shopping-rules__item">
            * Платим шивдко
        </li>
        <li class="shopping-rules__item">
           * Насолождуємлсь товарами
        </li>
      </ul>
    </div>
  </secondary-wrapper-masterpage>
</template>

<script>
import SecondaryWrapperMasterpage from "@/masterpages/SecondaryWrapperMasterpage.vue";
  export default {
    name: 'ShoppingRulesView',
    components: {
      SecondaryWrapperMasterpage,
    },
  }
</script>

<style lang="scss" scoped>
.shopping-rules {
		// .shopping-rules__title
		&__title {
      font-size: 22px;
      margin-bottom: 20px;
      font-weight: 600;
    }
		// .shopping-rules__list
		&__list {
      display: grid;
      gap: 10px;
    }
		// .shopping-rules__item
		&__item {
      font-size: 18px;
    }
}
.page {
}

</style>