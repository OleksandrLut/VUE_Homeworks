<template>
  <main-masterpage>
    <div v-if="isLoading" class="page-loader">
    <v-progress-circular
      color="primary"
      indeterminate
      :size="52"
      :width="5"
    ></v-progress-circular>
    </div>
    <div v-else-if="hasError" class="load-error">{{ $t('messages.error') }}</div>
    <div class="home page-padding-top">
      <div class="home__container">
        <div class="home__asside">
          <filters-component/>
        </div>
        <div class="home__body">


          <products-gallery/>

        </div>
      </div>
    </div>
  </main-masterpage>
</template>

<script>
import MainMasterpage from "@/masterpages/MainMasterpage.vue";
import ProductsGallery from "@/components/ProductsGallery.vue";
import { mapGetters, mapActions } from 'vuex';
import FiltersComponent from "@/components/FiltersComponent.vue";


export default {
  name: "HomePage",
  components: { MainMasterpage, ProductsGallery, FiltersComponent },
  computed: {
    ...mapGetters('products', [ 'getItemsList', 'isLoading', 'hasError']),
    ...mapGetters('auth', ['getUser'])
  },
  async created() {
    await this.loadList();
    if (this.getUser && this.getUser.id) {
      try {
        await this.loadUserPermissions(this.getUser.id);
      } catch (error) {
        console.error('Помилка завантаження прав користувача', error);
      }
    }
  },
  methods: {
    ...mapActions('products', ['loadList']),
    ...mapActions('users', ['loadUserPermissions']),
  },
};
</script>

<style land="scss">

</style>