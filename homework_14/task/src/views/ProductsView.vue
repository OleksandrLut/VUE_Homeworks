<template>
  <main-wrapper-masterpage>
    <div class="products-page">
      <div class="products-page__container">
        <page-component>
          <template #page-title>
            Оберіть продукти
          </template>
          <template #main>
            <products-gallery/>
          </template>
        </page-component>
      </div>
    </div>
  </main-wrapper-masterpage>
</template>

<script>
import MainWrapperMasterpage from "@/masterpages/MainWrapperMasterpage.vue";
import PageComponent from '@/components/PageComponent.vue';
import ProductsGallery from "@/components/ProductsGallery.vue";
  export default {
    name: 'ProductsView',
    components: { MainWrapperMasterpage, PageComponent, ProductsGallery }
  }
</script>

<style lang="scss" scoped>

</style>