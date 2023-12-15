<template>
  <main-wrapper-masterpage>
    <div class="provisors-page">
      <div class="provisors-page__container">
        <page-component>
          <template #page-title>
            Оберіть постачальника
          </template>
          <template #main>
            <provisors-component/>
          </template>
          <template #page-left>
              Найбільш попклярний: Економ
          </template>
        </page-component>
      </div>
    </div>
  </main-wrapper-masterpage>
</template>

<script>
import MainWrapperMasterpage from "@/masterpages/MainWrapperMasterpage.vue";
import PageComponent from '@/components/PageComponent.vue';
import ProvisorsComponent from "@/components/ProvisorsComponent.vue";

  export default {
    name: 'ProvisorsView',
    components: { MainWrapperMasterpage, PageComponent, ProvisorsComponent }
  }
</script>

<style lang="scss" scoped>

</style>