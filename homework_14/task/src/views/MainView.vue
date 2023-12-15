<template>
  <main-wrapper-masterpage>
    <div class="main-page">
        <page-component>
          <template #page-title>
              Вітаємо!
            </template>
          <template #main>
            Сподіваємось ви будете чемними, і обовязково щось купите
          </template>
          <template #page-right>
            <owner-component/>
          </template>
        </page-component>
    </div>
  </main-wrapper-masterpage>
</template>

<script>
import MainWrapperMasterpage from "@/masterpages/MainWrapperMasterpage.vue";
import PageComponent from '@/components/PageComponent.vue';
import OwnerComponent from "@/components/OwnerComponent.vue";

  export default {
    name: 'MainView',
    components: { MainWrapperMasterpage, PageComponent, OwnerComponent }
}
</script>

<style lang="scss" scoped>

</style>